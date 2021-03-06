/* eslint-disable no-unused-vars */
const express = require("express");

const { verifySignUp } = require("../middlewares");

const controller = require("../controllers/auth.controller");

const app = express();
const router = express.Router();

router.post(
  "/signup/:token?",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controller.signup
  //   () => {
  //     if (request.params.token !== undefined) {
  //       const token = request.params.token;
  //       console.log("token", token);
  //     } else {
  //       controller.signup;
  //     }
  //   }
);
router.post("/signin", controller.signin);

module.exports = router;
