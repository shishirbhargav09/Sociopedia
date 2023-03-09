import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadUser } from "./Actions/User";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Toaster } from "react-hot-toast";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
function App() {
  const {isAuthenticated} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
    
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
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
