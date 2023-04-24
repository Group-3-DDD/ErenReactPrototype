import React from 'react';
import logo from './accountlogo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeCooked from './HomeCooked';
import Takeaway from './Takeaway';

function App() {
  return (
    
      <div className="App">
        <div className="banner"></div>
        <Routes>
          <Route path="/" element={
            <div className="button-container">
              <Link to="/takeaway">Go to Takeaway Page</Link>

              <Link to="/homecooked" className="button">Home Cooked</Link>
            </div>
          } />
          <Route path="/homecooked" element={<HomeCooked />} />
          <Route path="/takeaway" element={<Takeaway />} />

        </Routes>
      </div>
    
  );
}

export default App;
