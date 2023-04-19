import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeCooked from './HomeCooked';
import Takeaway from './Takeaway';

function Mainpage() {
  return (
    <div className="App">
      <div className="banner"></div>
      <Routes>
        <Route path="/homecooked" element={<HomeCooked />} />
        <Route path="/takeaways" element={<Takeaway />} />
      </Routes>
      <div className="button-container">
        <Link to="/takeaways" className="button">Takeaways</Link>
        <Link to="/homecooked" className="button">Home Cooked</Link>
      </div>
      
    </div>
  );
}

export default Mainpage;
