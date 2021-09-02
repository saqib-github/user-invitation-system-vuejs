const db = require("../models");

const Vendor = db.vendor;

exports.allVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    console.log(vendors);
    res.status(200).json(vendors);
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete({ _id: req.params.id });
    console.log(vendor);
    res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findOneAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      city: req.body.city,
      country: req.body.country,
    });
    console.log(vendor);
    res
      .status(200)
      .json({ message: "Vendor updated successfully"});
  } catch (err) {
    res.json({ message: err.message });
  } //
};
