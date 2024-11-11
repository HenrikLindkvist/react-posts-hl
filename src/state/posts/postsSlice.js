import {
  // createAsyncThunk,
  createSlice /* PayloadAction */,
} from "@reduxjs/toolkit";

const initialState = {
  posts: [{ id: 0, title: "First post", text: "This is the first post" }],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    /* increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }, */
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  /* extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  }, */
});

/* export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions; */

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
