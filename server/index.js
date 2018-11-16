const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const { getDocumentData } = require("./scrape");

const saveArticle = async (req, res) => {
  const url = req.body.url;
  const documentData = await getDocumentData(url);

  //TODO: save to database
  res.status(201);
  res.send({ articles: documentData });
};

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post("/articles", saveArticle)
  .listen(3004, () => console.log("server, listening on port 3004"));
