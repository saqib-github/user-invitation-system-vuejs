const express = require("express");

const { authJwt } = require("../middlewares");

const controller = require("../controllers/vendor.controller.js");

const router = express.Router();

router.get("/", [authJwt.verifyToken], controller.allVendors);
router.delete("/:id", [authJwt.verifyToken], controller.deleteVendor);

module.exports = router;
