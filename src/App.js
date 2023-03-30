import React,{useState} from 'react';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register"
import {Guest} from './Guest';
import logo from './logo transparent.png';
import Mainpage from './Mainpage';


function App() {
  const[currentForm, setCurrentForm] = useState('login');


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    
    <div className="App">
      
      <img src={logo} alt="logo transparent" className="logo transparent" />
      {currentForm === "login" ? (
  <Login onFormSwitch={toggleForm} />
) : currentForm === "register" ? (
  <Register onFormSwitch={toggleForm} />
) : currentForm === "mainpage" ? (
  <Mainpage onFormSwitch={toggleForm} />
) : (
  <Guest onFormSwitch={toggleForm} />
)}

      
    </div>
  );
}

export default App;
