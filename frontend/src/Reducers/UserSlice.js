import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginRequest: (state) => {
      state.loading = true;
    },
    LoginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    LoginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    RegisterRequest: (state) => {
      state.loading = true;
    },
    RegisterSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    LoadUserRequest: (state) => {
      state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    LoadUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    LogoutUserRequest: (state) => {
      state.loading = true;
    },
    LogoutUserSuccess: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    LogoutUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    deleteProfileRequest: (state) => {
      state.loading = true;
    },
    deleteProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
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
    
  

    clearErrors: (state) => {
      state.error = null;
    },
  },
});
export const { LoginRequest, LoginSuccess, LoginFailure, RegisterRequest, RegisterSuccess, RegisterFailure, LoadUserRequest, LoadUserSuccess, LoadUserFailure, LogoutUserRequest, LogoutUserSuccess, LogoutUserFailure, deleteProfileRequest, deleteProfileSuccess, deleteProfileFailure,   userProfileRequest, userProfileSuccess, userProfileFailure, clearErrors } =
userSlice.actions;

export default userSlice.reducer;
