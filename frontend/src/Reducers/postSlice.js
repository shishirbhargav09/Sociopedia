import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};


export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers:{
    likeRequest: (state) => {
        state.loading = true;
      },
      likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      likeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      addCommentRequest: (state) => {
        state.loading = true;
      },
      addCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      addCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteCommentRequest: (state) => {
        state.loading = true;
      },
      deleteCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      myPostsRequest: (state) => {
        state.loading = true;
      },
      myPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      },
      myPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    
    clearErrors: (state) => {
      state.error = null;
    },
  }

})

export const { likeRequest, likeSuccess, likeFailure,  addCommentRequest, addCommentSuccess, addCommentFailure, deleteCommentRequest, deleteCommentSuccess, deleteCommentFailure, myPostsRequest, myPostsSuccess, myPostsFailure,    
clearErrors } =
postSlice.actions;

export default postSlice.reducer;
