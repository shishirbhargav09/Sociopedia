import { configureStore } from '@reduxjs/toolkit'
import  postOfFollowing  from './Reducers/PostofFollowingSlice'
import  userReducer from './Reducers/UserSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowing,
  },
})