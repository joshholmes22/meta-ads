const express = require("express");
const {
  getCampaigns,
  getCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignControllers");

const router = express.Router();

router.route("/").get(getCampaigns);
router.route("/:id").get(getCampaign);
router.route("/").post(createCampaign);
router.route("/:id").put(updateCampaign);
router.route("/:id").delete(deleteCampaign);

module.exports = router;
