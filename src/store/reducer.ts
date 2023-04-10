import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from './posts'

const rootReducer = combineReducers({
    posts:postsReducer
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>