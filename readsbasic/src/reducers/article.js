import {
    GET_ARTICLE
  } from '../actions/types';
  
  const initialState = {
    articles: [],
  };
  
  function articleReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ARTICLE:
        return {
          ...state,
          articles: payload,
        };
      default:
        return state;
    }
  }
  
  export default articleReducer;