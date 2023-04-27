//https://youtu.be/Y-XW9m8qOis
import React,{useState} from "react"
import accountlogo from './accountlogo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const Guest =(props) =>{
    const [name, setName] = useState(' ');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(name);
        
    }

    return(
        <Routes>
        <Route path="/" element={
        <form className="guest-form" onSubmit={handleSubmit}>
        
        <img src={accountlogo} alt="account-logo" className="account-logo" />
      
        <label htmlFor="guest">Full Name </label>
            <input Text={Text}
            name="name" 
            placeholder="Full Name" 
            id="name" />
            <Link to="/mainpage" className="continuebutton">
              Continue
            </Link>
            <Link className="account" to="/login">
        Already have an account?
      </Link>
         <Link to="/register" className="account">
              Don't have an account yet?
            </Link>
        </form>
        } />
      </Routes>
        
    )
}