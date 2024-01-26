const express = require("express");
const router = express.Router();

const { add, remove } = require("../controllers/WeatherController.js");

router.post("/add", add);
router.post("/remove", remove);

module.exports = router;
