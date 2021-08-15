const Customer = require("../models/customerModel");
exports.addFundsController = (req, res) => {
  const id = req.params.id;
  const { amount } = req.body;
  console.log(req.body);

  Customer.findOne({ accNo: id })
    .then((response) => {
      // console.log(`Before: ${response}`);
      const snapshotOfCurrentBalance = response.currentBal + Number(amount);
      console.log(`Snapshot of Balance: ${snapshotOfCurrentBalance}`);
      Customer.findOneAndUpdate(
        { accNo: id },

        {
          $inc: { currentBal: Number(amount) },

          $push: {
            transactions: {
              transactionType: "credit",
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
          // console.log(`After: ${response}`);
          res.redirect(`/customers/${id}`);
        })
        .catch((err) => {
          res.json({ message: err._message });
          console.log(err);
        });
    })
    .catch((err) => {
      res.json({ message: err._message });
      console.log(err);
    });
};
