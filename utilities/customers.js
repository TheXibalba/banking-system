const { v4: uuidv4 } = require("uuid");
const customers = [
  {
    name: "Devshree Kusumkar",
    accNo: uuidv4(),
    email: "devshree.kusumkar@pccoepune.org",
    currentBal: 50000,
  },
  {
    name: "Kedar nandargi",
    accNo: uuidv4(),
    email: "kedar.nandargi@pccoepune.org",
    currentBal: 45000,
  },
];

module.exports = customers;
