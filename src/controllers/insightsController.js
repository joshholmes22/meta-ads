require("dotenv").config();
const axios = require("axios");

const access_token = process.env.ACCESS_TOKEN;
const id = `act_${process.env.AD_ACCOUNT_ID}`;

exports.getInsights = async (req, res) => {
  const { ad_id } = req.params;

  // Define the metrics you want to retrieve
  const metrics = [
    "impressions",
    "clicks",
    "spend",
    "reach",
    "frequency",
    "unique_clicks",
    "cpc",
    "cpm",
    "cpp",
    "ctr",
    "unique_ctr",
    "actions",
    "conversions",
    "video_p50_watched_actions",
    "video_p75_watched_actions",
    "video_p95_watched_actions",
    "video_p100_watched_actions",
    "video_avg_time_watched_actions",
  ];

  try {
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${ad_id}/insights?fields=${metrics.join(
        ","
      )}&access_token=${access_token}`
    );

    console.log(response.data);
    res
      .status(200)
      .json({ message: "getInsights", insights: response.data.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
