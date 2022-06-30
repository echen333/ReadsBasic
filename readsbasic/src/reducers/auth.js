import {
    USER_LOADED,
    AUTH_ERROR
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null
};

function authReducer (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}
export default authReducer;