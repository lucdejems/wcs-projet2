

const { getDocumentData } = require("./scrape");

const saveArticle = async (req, res) => {
  const url = req.body.url;
  const documentData = await getDocumentData(url)
  await axios
  .post('https://wcs-projet2.herokuapp.com/articles', {
   articles
  })
  //.then( response => {
  //  console.log(response.data);
  //})
  .catch( error => {
    console.log(error);
  });   
   

  res.status(201);
  res.send({ articles: documentData });
  
  };

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post("/articles", saveArticle)
  .listen(3004, () => console.log("server, listening on port 3004"));
  