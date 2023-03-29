import React, { useState } from "react";
import accountlogo from "./accountlogo.png";
import csvData from "./dumbdata.csv";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(csvData)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const rows = data.split("\n").slice(1);
        const users = rows.map((row) => {
          const columns = row.split(",");
          return { name: columns[0], email: columns[1], password: columns[2] };
        });
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
          /*history.push("/mainpage");*/
        } else {
          alert("Invalid email or password.");
        }
      });
  };

    return(
        <>
        <form className="login-form" onSubmit={handleSubmit}>
        
        <img src={accountlogo} alt="account-logo" className="account-logo" />
      
            <label htmalfor="email">Email </label>
            <input type ="email" placeholder="youremail@email.com" id="email" name="email"/>
            <label htamlfor="password">Password </label>
            <input type ="password" placeholder="password" id="password" name="password"/>
            <button className="loginbutton">Log In</button>
            <button className="no-account" onClick={()=>props.onFormSwitch('register')}>Dont have an account?</button>
            <button className="guest" onClick={()=>props.onFormSwitch('guest')}>Continue as a Guest?</button>
        </form>
        </>
        
    )
}