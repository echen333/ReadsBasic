import { combineReducers } from "redux";
import test from './test'
import article from './article'
import auth from './auth'
import profile from './profile'

export  default combineReducers({
    test,
    article,
    auth,
    profile
})