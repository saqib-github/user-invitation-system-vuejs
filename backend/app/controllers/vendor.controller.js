const db = require("../models");

const Vendor = db.vendor;

exports.allVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find({});
        console.log(vendors)
        res.status(200).json(vendors);

    } catch (err) {
        res.json({message: err.message});
    }
}