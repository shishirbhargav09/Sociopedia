import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addCommentOnPost, likePost, updatePost } from "../../Actions/Post";
import { getFollowingPosts, getmyPosts } from "../../Actions/User";
import User from "../User/User";
import CommentCard from "../CommentCard.jsx/CommentCard";

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
  const [likesUser, setLikesUser] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const [captionValue, setCaptionValue] = useState(caption);
  const [captionToggle, setCaptionToggle] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handlelike = async () => {
    setLiked(!liked);
    await dispatch(likePost(postId));
    if (isAccount) {
      dispatch(getmyPosts());

    } else {
      dispatch(getFollowingPosts());
    }
  };

  useEffect(() => {
    likes.forEach((item) => {
      if (item._id === user._id) {
        setLiked(true);
      }
    });
  }, [likes, user._id]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    await dispatch(addCommentOnPost(postId, commentValue));
    if (isAccount) {
      console.log("Bring my posts");
    } else {
      dispatch(getFollowingPosts());
    }
  };

  const updateCaptionHandler = (e) => {
    e.preventDefault();
    dispatch(updatePost(captionValue, postId));
    dispatch(getmyPosts());
  };

  return (
    <div className="post">
      <div className="postHeader">
        {isAccount ? (
          <Button onClick={() => setCaptionToggle(!captionToggle)} >
            <MoreVert />
          </Button>
        ) : null}
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
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
        onClick={() => {
          setLikesUser(!likesUser);
        }}
        disabled={likes.length === 0 ? true : false}
      >
        <Typography>{likes.length} Likes</Typography>
      </button>
      <div className="postFooter">
        <Button onClick={handlelike}>
          {liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}
        </Button>
        <Button onClick={() => setCommentToggle(!commentToggle)}>
          <ChatBubbleOutline />
        </Button>
        {isDelete ? (
          <Button>
            <DeleteOutline />
          </Button>
        ) : null}
      </div>
      <Dialog open={likesUser} onClose={() => setLikesUser(!likesUser)}>
        <div className="DialogBox">
          <Typography variant="h4">Liked By</Typography>

          {likes.map((like) => (
            <User
              key={like._id}
              userId={like._id}
              name={like.name}
              // avatar={like.avatar.url}
            />
          ))}
        </div>
      </Dialog>
      <Dialog
        open={commentToggle}
        onClose={() => setCommentToggle(!commentToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Comments By</Typography>

          <form className="commentForm" onSubmit={addCommentHandler}>
            <input
              type="text"
              placeholder="Comment Here..."
              required
              value={commentValue}
              onChange={(e) => {
                setCommentValue(e.target.value);
              }}
            />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </form>
          {
            comments.length>0 ? comments.map((comment) => {
              return <CommentCard userId={comment.user._id}
              name={comment.user.name}
              avatar={comment.user.avatar.url}
              comment={comment.comment}
              commentId={comment._id}
              postId={postId}
              key={comment._id}
              isAccount={isAccount} />
              
            }):<Typography>No comments yet</Typography>
          }
        </div>
      </Dialog>
      <Dialog
        open={captionToggle}
        onClose={() => setCaptionToggle(!captionToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Update Caption</Typography>

          <form className="commentForm" onSubmit={updateCaptionHandler}>
            <input
              type="text"
              value={captionValue}
              onChange={(e) => setCaptionValue(e.target.value)}
              placeholder="Caption Here..."
              required
            />

            <Button type="submit" variant="contained">
              Update
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}

export default Post;
