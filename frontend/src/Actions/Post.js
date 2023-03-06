import axios from "axios";
import { addCommentFailure, addCommentRequest, addCommentSuccess, deleteCommentFailure, deleteCommentRequest, deleteCommentSuccess, likeFailure, likeRequest, likeSuccess } from "../Reducers/postSlice";
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

  export const addCommentOnPost = (id,comment) => async (dispatch) => {
    dispatch(addCommentRequest())
    try {
  
      const { data } = await axios.put(`/api/v1/post/comment/${id}`,
      {
        comment
      });
      dispatch(addCommentSuccess(data.message))
      toast.success(data.message)
       } catch (error) {
      dispatch(addCommentFailure(error.message)) 
      toast.error(error.message)

    }
  };

  export const deleteCommentOnPost = (id,commentId) => async (dispatch) => {
    dispatch(deleteCommentRequest())
    try {
  
      const { data } = await axios.delete(`/api/v1/post/comment/${id}`,
      {
        commentId
      });
      dispatch(deleteCommentSuccess(data.message))
      toast.success(data.message)
       } catch (error) {
      dispatch(deleteCommentFailure(error.message)) 
      toast.error(error.message)

    }
  };