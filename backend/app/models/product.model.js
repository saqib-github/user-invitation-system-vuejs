const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
      name: String,
      price: Number,
      category: String,
      quantity: Number,
      description: String,
      Date: Date,
    })
);

module.exports = Product;
