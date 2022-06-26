import {
    GET_ARTICLE
  } from './types';
  import axios from 'axios'
  
  // Add to collection with value of cur state and return id
  export const getArticle = (numGet) =>  async (dispatch) => {
      try {
            console.log(numGet,"HI");
          const res = await axios.get(`/api/article/getAny/${numGet}`);
          dispatch({
              type: GET_ARTICLE,
              payload: res.data
          });
      } catch (err){
          console.log(err.response.data.errors);
      }
  }