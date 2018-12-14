const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const { getDocumentData } = require("./scrape");

const serviceAccount = require("./wcs-projet-2-firebase-adminsdk-5e2k5-e90f0ccb6f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wcs-projet-2.firebaseio.com"
});

const db = admin.firestore();

function writeArticle(url) {
  return getDocumentData(url).then(data => {
    console.log(data);
    db.collection("articles")
      .add({
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        source: data.source
      })
      .then(ref => {
        console.log("Added document with ID: ", ref.id);
      });
  });
}

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .get("/", (req, res) => {
    res.send("Hello world");
  })
  .post("/articles", (req, res) => {
    console.log(req.body);
    const url = req.body.url;
    writeArticle(url)
      .then(() => {
       res.sendStatus(201);
    });
  })
  .listen(3004, '0.0.0.0', () => console.log("server, listening on port 3004"));
