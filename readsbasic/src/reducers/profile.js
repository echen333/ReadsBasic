import {
    LIKE_ARTICLE,
    READ_ARTICLE
} from '../actions/types';
  
const initialState = {
    testIdVal: 0,
};
  
function testReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LIKE_ARTICLE:
        case READ_ARTICLE:
            return {
                ...state,
                user: payload
            };
        default:
            return state;
    }
}

export default testReducer;