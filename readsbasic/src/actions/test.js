
import {
  TEST_ADD
} from './types';
import axios from 'axios'

// Add to collection with value of cur state and return id
export const addTest = (buttonVal) =>  async (dispatch) => {
    try {
        const res = await axios.post('/testAdd', buttonVal);

        dispatch({
            type: TEST_ADD,
            payload: res.data
        });

    } catch (err){
        console.log(err.response.data.errors);
    }
}