import axios from "axios";
import { likeFailure, likeRequest, likeSuccess } from "../Reducers/postSlice";
import { toast } from "react-hot-toast";

export const likePost = (id) => async (dispatch) => {
    dispatch(likeRequest())
    try {
  
      const { data } = await axios.get(`/api/v1/post/${id}`);
      dispatch(likeSuccess(data.message))
      toast.success(data.message)
       } catch (error) {
      dispatch(likeFailure(error.message)) 
      toast.error(error.message)

    }
  };