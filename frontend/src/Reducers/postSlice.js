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
      newPostRequest: (state) => {
        state.loading = true;
      },
      newPostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      newPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateCaptionRequest: (state) => {
        state.loading = true;
      },
      updateCaptionSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateCaptionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deletePostRequest: (state) => {
        state.loading = true;
      },
      deletePostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deletePostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateProfileRequest: (state) => {
        state.loading = true;
      },
      updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      
    userPostsRequest: (state) => {
      state.loading = true;
    },
    userPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    userPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    followUserRequest: (state) => {
      state.loading = true;
    },
    followUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    followUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }

})

export const { likeRequest, likeSuccess, likeFailure,  addCommentRequest, addCommentSuccess, addCommentFailure, deleteCommentRequest, deleteCommentSuccess, deleteCommentFailure, myPostsRequest, myPostsSuccess, myPostsFailure, newPostRequest, newPostSuccess, newPostFailure, deletePostRequest, deletePostSuccess, deletePostFailure,updateCaptionRequest, updateCaptionSuccess, updateCaptionFailure,  updateProfileRequest, updateProfileSuccess, updateProfileFailure, userPostsRequest, userPostsSuccess, userPostsFailure,  followUserRequest, followUserSuccess, followUserFailure,
      
clearErrors } =
postSlice.actions;

export default postSlice.reducer;
