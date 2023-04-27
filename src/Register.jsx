//https://youtu.be/Y-XW9m8qOis
import React,{useState} from "react"
import accountlogo from './accountlogo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

return (
     <Routes>
        <Route path="/" element={
      <form className="register-form" onSubmit={handleSubmit}>
        <img src={accountlogo} alt="account-logo" className="account-logo" />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your Full Name"
          id="name"
          name="name"
          value={name}
          
        />

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
        <Link className="signinbutton" to="/mainpage">
        Register
      </Link>
      <Link className="account" to="/login">
        Already have an account?
      </Link>
      <Link className="guest" to="/guest">
        Continue as a Guest?
      </Link>

      </form>
    } />
      </Routes>
  );
};