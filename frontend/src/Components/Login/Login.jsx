import { Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useSelector((state) => state.user);
  const guestLoginHandler = async () => {
    setEmail("guest@gmail.com");
    setPassword("guest@gmail.com");
    await dispatch(loginUser(email, password));
    
    navigate("/");
  };
  const loginHandler = async (e) => {
    e.preventDefault();

    await dispatch(loginUser(email, password));
    navigate("/");
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Sociopedia
        </Typography>
        <input
          type="email"
          autoComplete="username"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to="/forgot/password">
          <Typography>Forget Password</Typography>
        </Link>
        {loading && <CircularProgress />}
        <Button type="submit">Login</Button>
        <Button
          onClick={(e) => {
            guestLoginHandler();
          }}
        >
          Guest Login
        </Button>
        <Link to="/register">
          <Typography>New User</Typography>
        </Link>
      </form>
    </div>
  );
}

export default Login;
