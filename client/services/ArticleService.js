import axios from 'axios';

function getArticle() {
  return axios.get('https://wcs-projet2.herokuapp.com/articles');
}

function postArticle(url) {
  return axios.post('http://localhost:3004/articles', {url});
}

// eslint-disable-next-line
export { getArticle, postArticle };
