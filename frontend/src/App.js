import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadUser } from "./Actions/User";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Toaster } from "react-hot-toast";
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
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
