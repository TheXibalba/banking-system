const Customer = require("../models/customerModel");

exports.indexController = (req, res) => {
  Customer.find()
    .sort("name")
    .exec((err, customers) => {
      if(!err){

        res.render("index", {
          customers,
        });
      }else{
        res.status(500);
      }
    });
};
