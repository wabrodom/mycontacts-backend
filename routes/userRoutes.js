const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const router = express.Router(); // capitalR  Router method from express

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
