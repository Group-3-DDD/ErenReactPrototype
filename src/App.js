import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Guest } from './Guest';
import logo from './logo transparent.png';
import Mainpage from './Mainpage';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName, history) => {
    setCurrentForm(formName);
    
  };

  return (
    <Router>
      <div className="App">
        <img src={logo} alt="logo transparent" className="logo transparent" />
        <Routes>
          <Route exact path="/" element={
            currentForm === 'login' ? (
              <Login onFormSwitch={toggleForm} />
            ) : currentForm === 'register' ? (
              <Register onFormSwitch={toggleForm} />
            ) : currentForm === 'guest' ? (
              <Guest onFormSwitch={toggleForm} />
            ) : (
              null
            )
          } />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
