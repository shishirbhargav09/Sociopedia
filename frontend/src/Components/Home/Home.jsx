import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, getFollowingPosts } from "../../Actions/User";
import Post from "../Post/Post";
import User from "../User/User";
import Loader from "../Loader/Loader";
import "./Home.css";
import { Typography } from "@mui/material";
function Home() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector(
    (state) => state.postOfFollowing
  );
  const {users, loading: usersloading} = useSelector(state=>state.allUsers)

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <>
      {loading===true || usersloading===true? (
        <Loader />
      ) : (
        <div className="home">
          <div className="homeleft">
            {posts && posts.length > 0 ? (
              posts.map((post) => {
                return <Post 
                key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
                />;
              })
            ) : (
              <Typography>No Posts Yet</Typography>
            )}
          </div>
          <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography>No Users Yet</Typography>
        )}
      </div>
        </div>
      )}
    </>
  );
}

export default Home;
