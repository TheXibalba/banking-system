const Customer = require("../models/customerModel");

exports.customerAddController = (req, res) => {
    // console.log(req.body);
  
    const { name,address,dob, email, currentBal,phone,imgUrl,gender } = req.body;
    const customer = new Customer({
      name: name,
      email: email,
      address:address,
      dob:dob,
      currentBal: currentBal,
      phone:phone,
      imgUrl:imgUrl,
      gender:gender
    });
  
    customer.save((err, result) => {
      if (err !== null && err.name === "ValidationError") {
        // console.log(err);
        res.json({ message: err._message });
      } else {
        // console.log(result);
        res.json({ message: result });
      }
    });
  };