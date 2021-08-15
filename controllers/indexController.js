const Customer = require("../models/customerModel");

exports.indexController = (req, res) => {
  Customer.find({}, (err, customers) => {
    console.log(customers);
    res.render("index", {
      customers,
 
    });
  });
};








