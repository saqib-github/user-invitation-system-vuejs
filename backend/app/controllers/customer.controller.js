const db = require("../models");

const Customer = db.customer;

exports.allCustomers = async (req, res) => {
  try {
      const customers = await Customer.find({});
      console.log(customers)
      res.status(200).json(customers);

  } catch (err) {
      res.json({message: err.message});
  }
};
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete({_id: req.params.id});
    console.log(customer);
    res.status(200).json({message: "Customer deleted successfully"});
  } catch (err) {
    res.json({message: err.message});
  }
}
