import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiCallAction";

// Define Name
const name = "posts";

// Define State
const initialState = {
  list: [],
};

// Define EndPoints
const POST_URL = "/posts";

const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    postsReceived: (posts, action) => {
      posts.list = action.payload;
    },
  },
});

export const { postsReceived } = postSlice.actions;
export default postSlice.reducer;

// Action Creator
export const getPosts = () => apiCallBegan(POST_URL, postsReceived.type, "get");
