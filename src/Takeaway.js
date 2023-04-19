import React from 'react';
import { Link } from 'react-router-dom';
import './Takeaway.css';

function Takeaway() {
  return (
    <div className="takeaway-container">
      <Link to="/mainpage" className="return-button">Return</Link>
      <h1>Takeaway Page</h1>
      <p>Some content here...</p>
    </div>
  );
}

export default Takeaway;
