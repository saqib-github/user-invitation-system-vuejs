const mongoose = require("mongoose");

const Vendor = mongoose.model(
    "Vendor",
    new mongoose.Schema({
      first_name: String,
      last_name: String,
      comany_name: String,
      city: String,
      country: String,
    })
);

module.exports = Vendor;
