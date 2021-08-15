const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    transactionType: {
      type: String,
    },

    transactionDetails: {
      transferredFrom: {
        type: String,
        default: "",
      },
      transferredTo: {
        type: String,
        default: "",
      },
      balance: {
        type: Number,
        default: -1,
      },

      amount: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a customer name"],
    },
    dob: {
      type: Date,
      required: [true, "Please provide a Date of Birth"],
    },
    address: {
      type: String,
      default: "India",
    },
    accNo: {
      type: String,
      required: true,
      default: mongoose.Types.ObjectId,
    },
    email: {
      type: String,
      required: [true, "Please provide an email address"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },

    transactions: [transactionSchema],
    currentBal: {
      type: Number,
      required: [true, "Please provide valid balance"],
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
