import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [{ id: 0, title: "First post", text: "This is the first post" }],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
