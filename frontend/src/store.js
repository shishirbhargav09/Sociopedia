import { configureStore } from '@reduxjs/toolkit'
import  postOfFollowing  from './Reducers/PostofFollowingSlice'
import allUsersReducer from './Reducers/allusersSlice'
import  userReducer from './Reducers/UserSlice'
import  postReducer from './Reducers/postSlice'
import  userProfileReducer from './Reducers/UserProfile'

export const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowing,
    allUsers: allUsersReducer,
    post: postReducer,
    userProfile: userProfileReducer,
  },
})