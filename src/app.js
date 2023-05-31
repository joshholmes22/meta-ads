const express = require("express");
const cors = require("cors");

const campaignRouter = require("./routes/campaignRoutes");
const targetingRouter = require("./routes/targetingRoutes");
const adSetRouter = require("./routes/adSetRoutes");
const insightsRouter = require("./routes/insightsRoutes");
const adRoutes = require("./routes/adRoutes");

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API", app: "Meta Ads" });
});

app.use("/api/v1/campaigns", campaignRouter);
app.use("/api/v1/targeting", targetingRouter);
app.use("/api/v1/adSets", adSetRouter);
app.use("/api/v1/insights", insightsRouter);
app.use("/api/v1/ads", adRoutes);

module.exports = app;
