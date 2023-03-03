import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../Actions/User";
import {  useDispatch } from 'react-redux'
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email,password))
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
        <Button type="submit">Login</Button>
        <Link to="/register">
          <Typography>New User</Typography>
        </Link>
      </form>
    </div>
  );
}

export default Login;
