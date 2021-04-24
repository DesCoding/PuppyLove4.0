const router = require("express").Router();
const authController = require("../../controllers/authController");
const verifyToken = require("../../config/verifyToken");

// Matches with "/userName"
router.route("/login").post(authController.login);

router.route("/signup").post(authController.signup);

router.route("/auth").post(verifyToken, authController.auth);

module.exports = router;

//model, controler, routes to get saved matches in db for member pages
