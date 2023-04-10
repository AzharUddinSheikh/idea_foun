import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const name = "posts";

const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    postsReceived: (posts, action) => {
      posts.list = action.payload.data;
    },
  },
});

export const { postsReceived } = postSlice.actions;
export default postSlice.reducer;

// Action Creator
export const getPosts = () => {}; // call api and get all posts;
