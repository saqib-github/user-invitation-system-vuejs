const express = require("express");

const { authJwt } = require("../middlewares");

const controller = require("../controllers/customer.controller.js");

const router = express.Router();

router.get("/", [authJwt.verifyToken], controller.allCustomers);
router.delete("/:id", [authJwt.verifyToken], controller.deleteCustomer);


module.exports = router;
