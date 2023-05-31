require("dotenv").config();
const axios = require("axios");

const access_token = process.env.ACCESS_TOKEN;
const id = `act_${process.env.AD_ACCOUNT_ID}`;

// Get All Ads
exports.getAds = async (req, res) => {
  try {
    console.log("HERE");
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${id}/ads?access_token=${access_token}`
    );

    console.log(response.data);
    res.status(200).json({ message: "getAds", ads: response.data.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get a Single Ad
exports.getAd = async (req, res) => {
  const { ad_id } = req.params;

  try {
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${ad_id}?access_token=${access_token}`
    );

    console.log(response.data);
    res.status(200).json({ message: "getAd", ad: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Create an Ad
exports.createAd = async (req, res) => {
  const { name, status, adset_id, creative } = req.body;
  const payload = {
    name,
    status,
    adset_id,
    creative,
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${id}/ads?access_token=${access_token}`,
      payload
    );

    console.log(response.data);
    res.status(200).json({ message: "createAd" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update an Ad
exports.updateAd = async (req, res) => {
  const { ad_id } = req.params;
  const { name, status, adset_id, creative } = req.body;
  const payload = {
    name,
    status,
    adset_id,
    creative,
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${ad_id}?access_token=${access_token}`,
      payload
    );

    console.log(response.data);
    res.status(200).json({ message: "updateAd" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete an Ad
exports.deleteAd = async (req, res) => {
  const { ad_id } = req.params;

  try {
    const response = await axios.delete(
      `https://graph.facebook.com/v17.0/${ad_id}?access_token=${access_token}`
    );

    console.log(response.data);
    res.status(200).json({ message: "deleteAd" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
