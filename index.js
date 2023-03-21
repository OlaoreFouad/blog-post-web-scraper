const scraper = require("./lib/app");
const utils = require("./lib/utils");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/get-recent-posts", async (req, res, next) => {
  const platform = req.query.platform;
  const url = req.query.url;

  const response = await scraper.parseFn(platform, url);
  const cleanedResponse = utils.builderFn(response);

  res.send(cleanedResponse);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
