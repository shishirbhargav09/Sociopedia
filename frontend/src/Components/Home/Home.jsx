import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFollowingPosts } from '../../Actions/User'
import Post from '../Post/Post'
import User from '../User/User'
import './Home.css'
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getFollowingPosts())
    }, [])
    
  return (
    <div className='home'>
        <div className="homeleft">
            <Post postImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0ZzRvsn0AQkYbNo9t1SOUEXYfEg8fIXJYQ&usqp=CAU'} ownerName={'Shishir Bhargav'} caption={'First Post'} />
            <Post postImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0ZzRvsn0AQkYbNo9t1SOUEXYfEg8fIXJYQ&usqp=CAU'} ownerName={'Shishir Bhargav'} caption={'First Post'} />
            <Post postImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0ZzRvsn0AQkYbNo9t1SOUEXYfEg8fIXJYQ&usqp=CAU'} ownerName={'Shishir Bhargav'} caption={'First Post'} />
        </div>
        <div className="homeright">
            <User userId={"user._id"} name={'thor'} avatar={'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg'} />
        </div>
    </div>
  )
}

export default Home