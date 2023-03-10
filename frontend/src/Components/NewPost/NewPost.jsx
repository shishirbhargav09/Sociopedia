import { Button, CircularProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPost } from '../../Actions/Post'
import { LoadUser } from '../../Actions/User'
import './NewPost.css'
import { useNavigate } from "react-router-dom";
function NewPost() {
  const navigate = useNavigate()
    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState("")
    const { loading } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setImage(Reader.result);
          }
        };
      };
      const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(createNewPost(caption, image));
       await dispatch(LoadUser());
        navigate('/account')
      };
    
  return (
    <div className="newPost">
    <form className="newPostForm" onSubmit={submitHandler}>
      <Typography variant="h3">New Post</Typography>

      {image && <img src={image} alt="post" />}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input
        type="text"
        placeholder="Caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      {
        loading && <CircularProgress />
      }
      <Button disabled={loading} type="submit">
        Post
      </Button>
    </form>
  </div>
  )
}

export default NewPost