"use strict";
require("dotenv").config();
const axios = require("axios");
const bizSdk = require("facebook-nodejs-business-sdk");
const access_token = process.env.ACCESS_TOKEN;
const id = `act_${process.env.AD_ACCOUNT_ID}`;
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const api = bizSdk.FacebookAdsApi.init(access_token, null, null, "v17.0");
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const details = async () => {
  const response = await axios.get(
    `https://graph.facebook.com/v17.0/${id}?access_token=${access_token}`
  );

  console.log(response.data);
};

const newCampaign = () => {
  const payload = {
    name: "My campaign 2",
    objective: "OUTCOME_TRAFFIC",
    status: "PAUSED",
    special_ad_categories: [],
  };

  const response = axios.post(
    `https://graph.facebook.com/v17.0/${id}/campaigns?access_token=${access_token}`,
    payload
  );

  console.log(response.data);
};

details();
newCampaign();

// const logApiCallResult = (apiCallName, data) => {
//   console.log(apiCallName);
//   if (showDebugingInfo) {
//     console.log("Data:" + JSON.stringify(data));
//   }
// };

// let fields, params;
// fields = [];
// params = {
//   name: "My campaign",
//   objective: "OUTCOME_TRAFFIC",
//   status: "PAUSED",
//   special_ad_categories: [],
// };

// new AdAccount(id)
//   .createCampaign(fields, params)
//   .then((campaigns) => {
//     logApiCallResult("campaigns api call complete.", campaigns);
//   })
//   .catch(console.error);
