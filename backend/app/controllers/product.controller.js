const db = require("../models");

const Product = db.product;

exports.allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    console.log(product);
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
