import { Avatar, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
  } from "@mui/icons-material";
function Post({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,
}) {
    const [liked, setLiked] = useState(false);

    const handlelike = () => {
        setLiked(!liked);
    }
  return (
    <div className="post">
      <div className="postHeader">
        {
            isAccount? <Button>
                <MoreVert/>
            </Button>: null
        }
      </div>
      <img src={postImage} alt="Post" />
      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="user"
          sx={{
            height: "3vmax",
            width: "3vmax",
          }}
        />
        <Link to={`/user/${ownerId}`}>
          <Typography fontWeight={700}>{ownerName} </Typography>
        </Link>
        <Typography
          fontWeight={400}
          color="rgba(0,0,0,0.582"
          style={{
            alignSelf: "center",
          }}
        >
          {caption}
        </Typography>
      </div>
      <button style={{
        border:"none",
        backgroundColor:"white",
        cursor:"pointer",
        margin:"1vmax 2vmax"
      }}><Typography>5 Likes</Typography></button>
      <div className="postFooter">
        <Button onClick={handlelike}>
           {
            liked?<Favorite sx={{color:"red"}}/>: <FavoriteBorder/>
           }
        </Button>
        <Button>
            <ChatBubbleOutline/>
        </Button>
       {
        isDelete? <Button>
        <DeleteOutline/>
    </Button>:null
       }
      </div>
    </div>
  );
}

export default Post;
