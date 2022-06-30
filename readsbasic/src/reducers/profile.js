import {
    ARTICLE_LIKE,
    ARTICLE_READ
} from '../actions/types';
  
const initialState = {
    testIdVal: 0,
};
  
function testReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
}

export default testReducer;