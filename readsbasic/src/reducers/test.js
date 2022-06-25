import {
    TEST_ADD
  } from '../actions/types';
  
  const initialState = {
    testIdVal: 0,
  };
  
  function testReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case TEST_ADD:
        return {
          ...state,
          testId: payload,
        };
      default:
        return state;
    }
  }
  
  export default testReducer;