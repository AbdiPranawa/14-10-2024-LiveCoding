const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");

// Cars API
router.get("/users", dashboardController.userPage);

module.exports = router;
