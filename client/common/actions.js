import actionTypes from './actionTypes';

export function toggleUploadModal() {
  console.log('check de action', toggleUploadModal);
  return {
    type: actionTypes.TOGGLE_UPLOAD_MODAL,
  };
}

export function articleFetched(article) {
  return {
    type: actionTypes.SET_ARTICLE_FETCHED,
    article,
  };
}
