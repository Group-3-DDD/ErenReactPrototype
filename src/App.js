import React,{useState} from 'react';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register"
import {Guest} from './Guest';
import logo from './logo transparent.png';
import Mainpage from './Mainpage';
import csv from "./dumbdata.csv"; 
import Papa from "papaparse"; 


function App() {
  const[currentForm, setCurrentForm] = useState('login');
  const [data, setData] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleData = (results) => {
    const column1 = [];
    const column2 = [];
    const column3 = [];
    results.data.forEach((row) => {
      column1.push(row[0]);
      column2.push(row[1]);
      column3.push(row[2]);
    });
    setData({ column1, column2, column3 }); 
  };

  // Use PapaParse to read and parse the CSV file when the component mounts
  Papa.parse(csv, {
    header: true,
    complete: handleData,
  });

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
