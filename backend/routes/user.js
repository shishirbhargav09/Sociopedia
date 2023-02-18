const express = require("express");
const { register, login, followAndUnfollowUser, logout } = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated, logout);
router.route("/follow/:id").get(isAuthenticated, followAndUnfollowUser);

module.exports = router;
