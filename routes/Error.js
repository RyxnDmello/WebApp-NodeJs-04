const express = require("express");
const router = express.Router();

const { error } = require("../controllers/ErrorController.js");

router.get("/:type", error);

module.exports = router;
