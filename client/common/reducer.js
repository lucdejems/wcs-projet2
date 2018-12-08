import actionTypes from './actionTypes';

const defaultState = {
  isUplaodModalOpen: false,
  articleFetched: {},
};

export function reducer(state = defaultState, action) {
  switch (action.Types) {
    case actionTypes.SET_IS_UPLOAD_MODAL_OPEN:
      return { ...state, isUplaodModalOpen: action.open };
    case actionTypes.SET_UPLOAD_MODAL_CLOSE:
      return { ...state, isUplaodModalOpen: false };
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
