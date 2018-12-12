import actionTypes from './actionTypes';

const defaultState = {
  isUploadModalOpen: false,
  articleFetched: {},
};

function reducer(state = defaultState, action) {
  console.log('check du state de isUploadModalOpen', state.isUploadModalOpen);
  switch (action.Types) {
    case actionTypes.TOGGLE_UPLOAD_MODAL:
      return { ...state, isUploadModalOpen: !state.isUploadModalOpen };
    case actionTypes.SET_ARTICLE_FETCHED:
      return {
        ...state,
        articleFetched: {
          ...state,
          title: action.title,
          img: action.img,
          origin: action.origin,
          description: action.description,
        },
      };
    default:
      return state;
  }
}

export default reducer;
