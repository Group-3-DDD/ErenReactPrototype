import React, { useState } from "react";
import accountlogo from "./accountlogo.png";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    
  };

  return (
    <>
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
        <button className="loginbutton" 
        onClick={() => {window.location.href='/mainpage'}}
        type="submit">
          Login
        </button>
        <button
          className="account"
          onClick={() => {window.location.href='/register'}}
        >
          Don't have an account yet?
        </button>
        <button className="guest"
        onClick={() => {window.location.href='/guest'}}
        >
          Continue as a Guest?
        </button>
      </form>
    </>
  );
};
