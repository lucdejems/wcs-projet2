import axios from 'axios';

function getArticle() {
  return axios.get('https://wcs-projet2.herokuapp.com/articles');
}

// eslint-disable-next-line
export { getArticle };
