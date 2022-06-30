import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR
} from './types';

export const loadUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

