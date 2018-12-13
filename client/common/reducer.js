import actionTypes from './actionTypes';

const initialState = {
  isUploadModalOpen: false,
  articleFetched: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
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
