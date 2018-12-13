const express = require("express");
const bodyParser = require("body-parser");

const { getDocumentData } = require("./scrape");

var database = firebase.database();

function writeUserData(Ujm5AV0Y7uqLjpJxbKns, myTitle, myDescription) {
  firebase.database().ref('articles/' + Ujm5AV0Y7uqLjpJxbKns).set({
    title: myTitle,
    description: myDescription
  });
}

const saveArticle = async (req, res) => {
  const url = req.body.url;
  const documentData = await getDocumentData(url);

  //TODO: save to database
  

  'https://wcs-projet-2.firebaseio.com/message_list.json'
  
  res.status(201);
  res.send({ articles: documentData });
};

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post("/articles", saveArticle, writeUserData)
  .listen(3004, () => console.log("server, listening on port 3004"));
  
