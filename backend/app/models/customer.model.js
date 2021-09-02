const mongoose = require("mongoose");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
      user_id: String,
      first_name: String,
      last_name: String,
      email: String,
      city: String,
      country: String,
      Date: Date,
    })
);

module.exports = Customer;
