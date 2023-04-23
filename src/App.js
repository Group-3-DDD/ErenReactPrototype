import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Guest } from './Guest';
import logo from './logo transparent.png';
import Mainpage from './Mainpage';

function App() {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  }
  const showLinks = window.location.pathname === "/";
  return (
    <Router>
      <div className="App">
        <img src={logo} alt="logo transparent" className="logo transparent" />
        {showLinks && (
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/guest">Guest</Link>
          </nav>)
          
        }
        {showLinks && (
        <div className="description">
        <h3>Who we are?</h3>
        <p>PlatePlanner is an product for university students who struggle to find meal ideas and finding the right takeaway. This application allows students to find meal suggestions based on ingredients they have available in their kitchen. PlatePlanner also allows students to find the nearest takeaway to their location.  This takeaway finder helps users to find local takeaways. This app provides users with detailed information about takeaway's location, contact details, and desired cuisine. With the PlatePlanner app users can enjoy both features of the takeaway finder and meal suggestion.</p>
        </div>
          )
          
        }


        <Routes>
          <Route path="/login" element={<Login onFormSwitch={toggleNav} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleNav} />} />
          <Route path="/guest" element={<Guest onFormSwitch={toggleNav} />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
