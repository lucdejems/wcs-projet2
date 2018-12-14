import axios from 'axios';

function getArticle() {
  return axios.get('https://wcs-projet2.herokuapp.com/articles');
}

function postArticle() {

  return axios.post('https://wcs-projet2.herokuapp.com/articles');
  return axios.post('http://localhost:19002/');

}

// eslint-disable-next-line
export { getArticle, postArticle };
