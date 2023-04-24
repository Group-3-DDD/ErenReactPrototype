import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeCooked from './HomeCooked';
import Takeaway from './Takeaway';
import logomain from './logo transparent.png';

function mainpage() {
  return (
    
      <div className="mainpage">
        
      <div className='containermain'>
      <img src={logomain} className="logomain" />
        <Routes>
          <Route path="/" element={
            <div className="button-container">
              <Link to="/takeaway" className="buttontakeaway">Go to Takeaway Page</Link>
              <Link to="/homecooked" className="buttonhome">Go to Home Cooked Meals</Link>
            </div>
          } />
          
          <Route path="/homecooked" element={<HomeCooked />} />
          <Route path="/takeaway" element={<Takeaway />} />

        </Routes>
        </div>
      </div>
    
  );
}

export default mainpage;
