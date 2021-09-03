const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
      user_id: String,
      name: String,
      price: Number,
      category: String,
      quantity: Number,
      description: String,
      image: String,
      Date: Date,
    })
);

module.exports = Product;
