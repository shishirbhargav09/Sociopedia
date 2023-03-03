import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadUser } from "./Actions/User";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
function App() {
  const {isAuthenticated} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
  }, [])
  
  return (
    <BrowserRouter>
     {isAuthenticated &&  <Header />}
      <Routes>
        <Route path='/' element={isAuthenticated? <Home/>:<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
