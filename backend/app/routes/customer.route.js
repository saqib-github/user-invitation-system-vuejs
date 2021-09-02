const express = require("express");

const { authJwt } = require("../middlewares");

const controller = require("../controllers/customer.controller.js");

const router = express.Router();

router.get("/", [authJwt.verifyToken], controller.allCustomers);
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteCustomer
);
router.put("/:id", [authJwt.verifyToken], controller.updateCustomer);

module.exports = router;
