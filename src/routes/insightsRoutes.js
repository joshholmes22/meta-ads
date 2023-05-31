const express = require("express");
const { getInsights } = require("../controllers/insightsController");

const router = express.Router();

router.route("/:ad_id").get(getInsights);

module.exports = router;
