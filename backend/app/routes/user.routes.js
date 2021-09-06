const express = require("express");
// const multer = require("multer");
// const path = require("path");

const { authJwt } = require("../middlewares");

const controller = require("../controllers/user.controllers.js");

const router = express.Router();

// router.use(express.static(__dirname + "./public/"));

// var Storage = multer.diskStorage({
//     destination: "./public",
//     filename: (req, file, cd) => {
//         cd(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//     }
// })

// const upload = multer({storage: Storage}).single('file');

router.get("/", [authJwt.verifyToken], controller.getUser);
router.post("/sendmail", [authJwt.verifyToken], controller.sendMail);
router.post('/updateuser/:id' , controller.updateUser);

module.exports = router;
