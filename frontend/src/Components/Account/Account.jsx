import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmyPosts } from "../../Actions/User";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";
import "./Acoount.css";

function Account() {
  const { loading, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmyPosts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="account">
          <div className="accountleft">
            {posts && posts.length > 0 ? (
              posts.map((post) => {
                return (
                  <Post
                    key={post._id}
                    postId={post._id}
                    caption={post.caption}
                    postImage={post.image.url}
                    likes={post.likes}
                    comments={post.comments}
                    ownerImage={post.owner.avatar.url}
                    ownerName={post.owner.name}
                    ownerId={post.owner._id}
                  />
                );
              })
            ) : (
              <Typography variant="h6">No Posts Yet</Typography>
            )}
          </div>
          <div className="accountright"></div>
        </div>
      )}
    </>
  );
}

export default Account;
