//https://youtu.be/Y-XW9m8qOis
import React, { useState } from "react";
import accountlogo from "./accountlogo.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    
  };

  return (
    
      <Routes>
        <Route path="/" element={
          <form className="login-form" onSubmit={handleSubmit}>
            
            <img src={accountlogo} alt="account-logo" className="account-logo" />
    
            <label htmlFor="email">Email </label>
            <input
              type="email"
              placeholder="youremail@email.com"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password </label>
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            
            <Link to="/mainpage" className="loginbutton">
              Login
            </Link>
    
            <Link to="/register" className="account">
              Don't have an account yet?
            </Link>
    
            <Link to="/guest" className="guest">
              Continue as a Guest?
            </Link>
          </form>
        } />
      </Routes>
    
  );
};
