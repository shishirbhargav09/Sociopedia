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
    
    clearErrors: (state) => {
      state.error = null;
    },
  }

})

export const { likeRequest, likeSuccess, likeFailure, clearErrors } =
postSlice.actions;

export default postSlice.reducer;
