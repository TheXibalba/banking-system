const Customer = require("../models/customerModel");
exports.withdrawController = (req, res) => {
  const id = req.params.id;
  const { amount } = req.body;

  Customer.findOne({ accNo: id })
    .then((response) => {
      console.log(`Current Balance: ${response.currentBal}`);
      console.log(`Negated Amount: ${Number(-amount)}`);
      const snapshotOfCurrentBalance = response.currentBal + Number(-amount);

      console.log(`Snapshot of Balance: ${snapshotOfCurrentBalance}`);
      Customer.findOneAndUpdate(
        { accNo: id },

        {
          $inc: { currentBal: Number(-amount) },

          $push: {
            transactions: {
              transactionType: "debit",
              transactionDetails: {
                transferredFrom: "Self",
                transferredTo: "Self",
                balance: snapshotOfCurrentBalance,
                amount: Number(amount),
              },
            },
          },
        }
      )
        .then((response) => {
          console.log(`After: ${response}`);
          res.redirect(`/customers/${id}`);
        })
        .catch((err) => {
          console.log(err);
          res.json({ message: err._message });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err._message });
    });
};
