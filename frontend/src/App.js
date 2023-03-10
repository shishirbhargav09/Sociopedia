import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  LoadUser } from "./Actions/User";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Toaster } from "react-hot-toast";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import Register from "./Components/Register/Register";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UserProfile from "./Components/UserProfile/UserProfile";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  const {isAuthenticated} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchuser = async () => {
    
    await dispatch(LoadUser());
    }
    fetchuser()
    
  }, [dispatch])
  
  return (
    <BrowserRouter>
     {isAuthenticated &&  <Header />}
      <Routes>
        <Route path='/' element={isAuthenticated? <Home/>:<Login/>}/>
        <Route path='/account' element={isAuthenticated? <Account/>:<Login/>}/>
        <Route
          path="/newpost"
          element={isAuthenticated ? <NewPost /> : <Login />}
        />
       <Route
          path="/register"
          element={isAuthenticated ? <Account /> : <Register />}
        />
         <Route
          path="/update/profile"
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />
        <Route
          path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route path="search" element={<Search />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
