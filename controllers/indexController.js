const Customer = require("../models/customerModel");

exports.indexController = (req, res) => {
  Customer.find({}, (err, customers) => {
    res.render("index", {
      customers,
 
    });
  });
};








