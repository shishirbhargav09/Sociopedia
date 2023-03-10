import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const userProfileSlice = createSlice({
  name: "userprofile",
  initialState,
  reducers: {
  
    userProfileRequest: (state) => {
      state.loading = true;
    },
    userProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userProfileFailure: (state, action) => {
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
    
  

    clearErrors: (state) => {
      state.error = null;
    },
  },
});
export const {   userProfileRequest, userProfileSuccess, userProfileFailure,  userPostsRequest, userPostsSuccess, userPostsFailure,clearErrors } =
userProfileSlice.actions;

export default userProfileSlice.reducer;
