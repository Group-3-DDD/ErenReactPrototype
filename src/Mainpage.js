import React from 'react';
import './mainpage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeCooked from './HomeCooked';
import Takeaway from './Takeaway';

function Mainpage() {
  return (
    
    <div className="App">
     {/* <div className="banner">
        <img src={logo} alt="Logo" />
  </div>*/}
      <Routes>
        <Route path="/" element={
          <div className="button-container">
            <button className="button" onClick={() => {window.location.href='/takeaway'}}>Takeaway</button>
            <button className="button" onClick={() => {window.location.href='/homecooked'}}>Home Cooked</button>
          </div>
        } />
        <Route path="/homecooked" element={<HomeCooked />} />
        <Route path="/takeaway" element={<Takeaway />} />
      </Routes>
    </div>

  );
}

export default Mainpage;
