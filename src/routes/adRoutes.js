const express = require("express");
const {
  getAds,
  getAd,
  createAd,
  updateAd,
  deleteAd,
} = require("../controllers/adControllers");

const router = express.Router();

router.route("/").get(getAds).post(createAd);
router.route("/:id").get(getAd).put(updateAd).delete(deleteAd);

module.exports = router;
