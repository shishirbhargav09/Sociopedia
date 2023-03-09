import axios from "axios";
import { toast } from "react-hot-toast";
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
import {
  myPostsFailure,
  myPostsRequest,
  myPostsSuccess,
} from "../Reducers/postSlice";
import {
  deleteProfileFailure,
  deleteProfileRequest,
  deleteProfileSuccess,
  LoadUserFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoginFailure,
  LoginRequest,
  LoginSuccess,
  LogoutUserFailure,
  LogoutUserRequest,
  LogoutUserSuccess,
  RegisterFailure,
  RegisterRequest,
  RegisterSuccess,
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

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(LogoutUserRequest());

    await axios.get("/api/v1/logout");

    dispatch(LogoutUserSuccess());
  } catch (error) {
    dispatch(LogoutUserFailure(error.response.data.message));
  }
};

export const deleteMyProfile = () => async (dispatch) => {
  try {
    dispatch(deleteProfileRequest());

    const { data } = await axios.delete("/api/v1/delete/me");

    dispatch(deleteProfileSuccess(data.message));
  } catch (error) {
    dispatch(deleteProfileFailure(error.response.data.message));
  }
};

export const registerUser =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch(RegisterRequest());

      const { data } = await axios.post("/api/v1/register", {
        name,
        email,
        password,
        avatar,
      });

      dispatch(RegisterSuccess(data.user));
      toast.success("User Created")
    } catch (error) {
      dispatch(RegisterFailure(error.response.data.message));
      toast.error(error.response.data.message)

    }
  };
