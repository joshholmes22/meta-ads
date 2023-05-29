require("dotenv").config();
const axios = require("axios");

const access_token = process.env.ACCESS_TOKEN;
const id = `act_${process.env.AD_ACCOUNT_ID}`;

exports.getAdSets = async (req, res) => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${id}/adsets?access_token=${access_token}`
    );
    console.log(response.data);
    res.status(200).json({ message: "getAdSets", adsets: response.data.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getAdSet = async (req, res) => {
  const adSetId = req.params.id;
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${adSetId}?access_token=${access_token}`
    );
    console.log(response.data);
    res.status(200).json({ message: "getAdSet", adset: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.createAdSet = async (req, res) => {
  const {
    name,
    optimization_goal,
    billing_event,
    bid_amount,
    daily_budget,
    campaign_id,
    targeting,
    start_time,
    status,
  } = req.body;
  const payload = {
    name,
    optimization_goal,
    billing_event,
    bid_amount,
    daily_budget,
    campaign_id,
    targeting,
    start_time,
    status,
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${id}/adsets?access_token=${access_token}`,
      payload
    );
    console.log(response.data);
    res.status(200).json({ message: "createAdSet", adset: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.updateAdSet = async (req, res) => {
  const adSetId = req.params.id;
  const updates = req.body;

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${adSetId}?access_token=${access_token}`,
      updates
    );
    console.log(response.data);
    res.status(200).json({ message: "updateAdSet", adset: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAdSet = async (req, res) => {
  const adSetId = req.params.id;

  try {
    const response = await axios.delete(
      `https://graph.facebook.com/v17.0/${adSetId}?access_token=${access_token}`
    );
    console.log(response.data);
    res.status(200).json({ message: "deleteAdSet", result: response.data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
