
import {
    LIKE_ARTICLE,
    READ_ARTICLE,
    GET_LIKE_ARTICLE,
} from './types';
import axios from 'axios'
  
  // Add to collection with value of cur state and return id
export const likeArticle = (articleID) =>  async (dispatch) => {
    try {
        const res = await axios.put(`/api/profile/like/${articleID}`);
        console.log("ACTION");        
        dispatch({
            type: LIKE_ARTICLE,
            payload: res.data
        });
        console.log(res.data);
    } catch (err){
        console.log(err.response.data.errors);
    }
}