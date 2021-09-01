const express = require("express");

const { authJwt } = require("../middlewares");

const controller = require("../controllers/product.controller.js");

const router = express.Router();

router.get("/", [authJwt.verifyToken], controller.allProducts);
router.delete("/:id",[authJwt.verifyToken], controller.deleteProduct);

module.exports = router;
