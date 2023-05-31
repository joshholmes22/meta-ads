require("dotenv").config();
const axios = require("axios");

const access_token = process.env.ACCESS_TOKEN;
const id = `act_${process.env.AD_ACCOUNT_ID}`;

exports.getCampaigns = async (req, res) => {
  try {
    console.log(id, access_token);
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${id}/campaigns?access_token=${access_token}`
    );
    console.log(response.data);
    res
      .status(200)
      .json({ message: "getCampaigns", campaigns: response.data.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getCampaign = async (req, res) => {
  const campaignId = req.params.id;
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${campaignId}?access_token=${access_token}`
    );
    console.log(response.data);
    res.status(200).json({ message: "getCampaign", campaign: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.createCampaign = async (req, res) => {
  const { name, objective, status, special_ad_categories } = req.body;
  const payload = {
    name,
    objective,
    status,
    special_ad_categories,
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${id}/campaigns?access_token=${access_token}`,
      payload
    );
    console.log(response.data);
    res
      .status(200)
      .json({ message: "createCampaign", campaign: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.updateCampaign = async (req, res) => {
  const campaignId = req.params.id;
  const updates = req.body;

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${campaignId}?access_token=${access_token}`,
      updates
    );
    console.log(response.data);
    res
      .status(200)
      .json({ message: "updateCampaign", campaign: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCampaign = async (req, res) => {
  const campaignId = req.params.id;

  try {
    const response = await axios.delete(
      `https://graph.facebook.com/v17.0/${campaignId}?access_token=${access_token}`
    );
    console.log(response.data);
    res.status(200).json({ message: "deleteCampaign", result: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
