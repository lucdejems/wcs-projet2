import actionTypes from './actionTypes';

export function isUploadModalOpen(open) {
  return {
    type: actionTypes.SET_IS_UPLOAD_MODAL_OPEN,
    open,
  };
}

export function closeUploadModal(close) {
  return {
    type: actionTypes.SET_UPLOAD_MODAL_CLOSE,
    close,
  };
}

export function articleFetched(article) {
  return {
    type: actionTypes.SET_ARTICLE_FETCHED,
    article,
  };
}
