const express = require("express");
const { createAudience } = require("../controllers/targetingControllers");

const router = express.Router();

router.route("/").post(createAudience);

module.exports = router;
