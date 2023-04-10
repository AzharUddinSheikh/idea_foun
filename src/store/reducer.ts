import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from './posts'

export default combineReducers({
    posts:postsReducer
})