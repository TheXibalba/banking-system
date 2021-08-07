const Customer = require("../models/customerModel");
exports.addFundsController = (req, res) => {
  const id = req.params.id;
  const { amount } = req.body;

  Customer.findOneAndUpdate(
    { accNo: id },
    {
      $inc: { currentBal: Number(amount) },
      $push: {
        transactions: {
          transactionType: "deposit",
          transactionDetails: {
            transferredFrom: "Self",
            transferredTo: "Self",
            amount: amount,
          },
        },
      },
      $set: {
        "transactions.$.balance": "$currentBal",
      },
    },
    (err, customer) => {
      if (err !== null && err.name === "ValidationError") {
        res.json({ message: err._message });
      } else {
        console.log("Balance has been updated successfully");
        res.redirect(`/customers/${id}`);
      }
    }
  );
};
