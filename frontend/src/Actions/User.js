import axios from 'axios'
import { LoginFailure, LoginRequest, LoginSuccess } from '../Reducers/UserSlice';
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
