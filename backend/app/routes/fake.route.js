const express = require("express");


const controller = require("../controllers/fake.controller.js");

const router = express.Router();

router.post('/fakecustomers', controller.insertFakeCustomers);
router.post('/fakevendors', controller.insertFakeVendors);
router.post('/fakeproducts', controller.insertFakeProducts);


module.exports = router;
