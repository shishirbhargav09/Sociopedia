import axios from "axios";
import {
  allUsersFailure,
  allUsersRequest,
  allUsersSuccess,
} from "../Reducers/allusersSlice";
import {
  postOfFollowingFailure,
  postOfFollowingRequest,
  postOfFollowingSuccess,
} from "../Reducers/PostofFollowingSlice";
import { myPostsFailure, myPostsRequest, myPostsSuccess } from "../Reducers/postSlice";
import {
  LoadUserFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoginFailure,
  LoginRequest,
  LoginSuccess,
} from "../Reducers/UserSlice";

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(LoginRequest());
  try {
    const { data } = await axios.post("/api/v1/login", {
      email,
      password,
    });
    dispatch(LoginSuccess(data.user));
  } catch (error) {
    dispatch(LoginFailure(error.message));
  }
};

export const LoadUser = () => async (dispatch) => {
  dispatch(LoadUserRequest());
  try {
    const { data } = await axios.get("/api/v1/me");
    dispatch(LoadUserSuccess(data.user));
  } catch (error) {
    dispatch(LoadUserFailure(error.message));
  }
};
export const getFollowingPosts = () => async (dispatch) => {
  dispatch(postOfFollowingRequest());
  try {
    const { data } = await axios.get("/api/v1/posts");
    dispatch(postOfFollowingSuccess(data.posts));
  } catch (error) {
    dispatch(postOfFollowingFailure(error.message));
  }
};

export const allUsers = () => async (dispatch) => {
  dispatch(allUsersRequest());
  try {
    const { data } = await axios.get("http://localhost:4000/api/v1/users");
    dispatch(allUsersSuccess(data.users));
  } catch (error) {
    dispatch(allUsersFailure(error.message));
  }
};

export const getmyPosts = () => async (dispatch) => {
  dispatch(myPostsRequest());
  try {
    const { data } = await axios.get("/api/v1/my/posts");
    dispatch(myPostsSuccess(data.posts));
  } catch (error) {
    dispatch(myPostsFailure(error.message));
  }
};
