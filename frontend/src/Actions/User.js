import axios from 'axios'
import { postOfFollowingFailure, postOfFollowingRequest, postOfFollowingSuccess } from '../Reducers/PostofFollowingSlice';
import { LoadUserFailure, LoadUserRequest, LoadUserSuccess, LoginFailure, LoginRequest, LoginSuccess } from '../Reducers/UserSlice';

export const loginUser = (email, password) => async (dispatch) => {
    dispatch(LoginRequest());
    try {
        const {data}= await axios.post('/api/v1/login',{
            email,
            password,
        })
        dispatch(LoginSuccess(data.user));
        

    } catch (error) {
        dispatch(LoginFailure(error.message));

    }
  
};

export const LoadUser = () => async (dispatch) => {
    dispatch(LoadUserRequest());
    try {
        const {data}= await axios.get('/api/v1/me')
        dispatch(LoadUserSuccess(data.user));
        

    } catch (error) {
        dispatch(LoadUserFailure(error.message));

    }
  
};
export const getFollowingPosts = () => async (dispatch) => {
    try {
      dispatch(postOfFollowingRequest());
  
      const { data } = await axios.get("/api/v1/posts");
      dispatch(postOfFollowingSuccess(data.posts));
    } catch (error) {
      dispatch(postOfFollowingFailure());
    }
  };