const mongoose = require("mongoose");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
      first_name: String,
      last_name: String,
      email: String,
      city: String,
      country: String,
    })
);

module.exports = Customer;
