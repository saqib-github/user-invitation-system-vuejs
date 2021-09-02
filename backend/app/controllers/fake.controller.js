const faker = require("faker");

const db = require("../models");

const Customer = db.customer;
const Product = db.product;
const Vendor = db.vendor;

exports.insertFakeCustomers = (req, res) => {
  try {
    for (let i = 0; i < req.body.number; i++) {
      const customer = new Customer({
        user_id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        city: faker.address.city(),
        country: faker.address.country(),
        Date: faker.date.past(),
      });
      customer.save();
    }
    res.status(200).json({ message: "Customers added successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.insertFakeProducts = (req, res) => {
  try {
    for (let i = 0; i < req.body.number; i++) {
      const product = new Product({
        user_id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        quantity: faker.datatype.number(),
        description: faker.commerce.productDescription(),
        Date: faker.date.past(),
      });
      product.save();
    }
    res.status(200).json({ message: "Products added successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.insertFakeVendors = (req, res) => {
  try {
    for (let i = 0; i < req.body.number; i++) {
      const vendor = new Vendor({
        user_id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        company_name: faker.company.companyName(),
        city: faker.address.city(),
        country: faker.address.country(),
        Date: faker.date.past(),
      });
      vendor.save();
    }
    res.status(200).json({ message: "Vendors added successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
