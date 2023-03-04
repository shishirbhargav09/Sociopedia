import { configureStore } from '@reduxjs/toolkit'
import  postOfFollowing  from './Reducers/PostofFollowingSlice'
import allUsersReducer from './Reducers/allusersSlice'
import  userReducer from './Reducers/UserSlice'
import  postReducer from './Reducers/postSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowing,
    allUsers: allUsersReducer,
    post: postReducer,
  },
})