const Customer = require("../models/customerModel");

exports.displayTransactionsController= (req, res) => {
const id=req.params.id;
  Customer.findOne({accNo:id}).then((customer) => {
    // console.log(customer);
    res.render("transactions",{
      customer
    });
  }).catch((error) => {
    console.log(error);
  });
  }