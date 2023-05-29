require("dotenv").config();
const axios = require("axios");

const access_token = process.env.ACCESS_TOKEN;
const id = `act_${process.env.AD_ACCOUNT_ID}`;

exports.createAudience = async (req, res) => {
  try {
    const payload = {
      geo_locations: { countries: ["UK"] },
      interests: [{ id: 6003358555604, name: "Pop punk" }],
    };

    const response = axios.post(
      `https://graph.facebook.com/v17.0/${id}/customaudiences?access_token=${access_token}`,
      payload
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
