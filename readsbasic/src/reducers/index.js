import { combineReducers } from "redux";
import test from './test'
import article from './article'
import auth from './auth'

export  default combineReducers({
    test,
    article,
    auth
})