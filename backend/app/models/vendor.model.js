const mongoose = require("mongoose");

const Vendor = mongoose.model(
    "Vendor",
    new mongoose.Schema({
      user_id: String,
      first_name: String,
      last_name: String,
      email: String,
      comany_name: String,
      city: String,
      country: String,
      Date: Date,
    })
);

module.exports = Vendor;
