const moment = require("moment");
const Customer = require("../models/customerModel");

exports.customerDisplayController = (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Customer.findOne({ accNo: id }, (err, customerData) => {
      if (!err) {
        //   console.log(customerData);
  
        const createdAt = moment(customerData.createdAt).format("lll");
        const modifiedAt = moment(customerData.updatedAt).format("lll");
        const dob = moment(customerData.dob).format("ll");
  
        res.render("customer", {
          customerData,
          createdAt,
          modifiedAt,
          dob
  
        });
      } else {
        console.log(err);
        res.json({ message: "Server Error!" });
      }
    });
  };
  