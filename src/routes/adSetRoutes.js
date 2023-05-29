const express = require("express");
const {
  getAdSets,
  getAdSet,
  createAdSet,
  updateAdSet,
  deleteAdSet,
} = require("../controllers/adSetControllers");

const router = express.Router();

router.route("/").get(getAdSets);
router.route("/:id").get(getAdSet);
router.route("/").post(createAdSet);
router.route("/:id").put(updateAdSet);
router.route("/:id").delete(deleteAdSet);

module.exports = router;
