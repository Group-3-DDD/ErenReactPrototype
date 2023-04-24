import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Guest } from './Guest';
import logo from './logo transparent.png';
import Mainpage from './mainpage';
import HomeCooked from './HomeCooked';
import Takeaway from './Takeaway';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import image4 from './img4.png';
import image5 from './img5.png';


function App() {
  

 
  const showLinks = window.location.pathname === "/";
  return (
    
    <Router>
      <div className="App">
        <img src={logo} alt="logo transparent" className="logo transparent" />
        
        {showLinks && (
          <nav>
            <button onClick={() => { window.location.href='/login' }}>Login</button>
            <button onClick={() => { window.location.href='/register' }}>Register</button>
            <button onClick={() => { window.location.href='/guest' }}>Guest</button>  
          </nav>
          )
        }
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/homecooked" element={<HomeCooked />} />
          <Route path="/takeaway" element={<Takeaway />} />
        </Routes>
        {showLinks && (
        <div className='container'>
        <div class="description">
        <h1>Who we are?</h1>
          <p>PlatePlanner is an product for university students who struggle to find meal ideas and finding the right takeaway. This application allows students to find meal suggestions based on ingredients they have available in their kitchen. PlatePlanner also allows students to find the nearest takeaway to their location.  This takeaway finder helps users to find local takeaways. This app provides users with detailed information about takeaway's location, contact details, and desired cuisine. With the PlatePlanner app users can enjoy both features of the takeaway finder and meal suggestion.</p>
        </div>
        
        <div className='slider'>
        
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}>
          <p><img src={image1} className="sliderimg" /></p>
          <p><img src={image2} className="sliderimg" /></p>
          <p><img src={image3} className="sliderimg" /></p>
          <p><img src={image4} className="sliderimg" /></p>
          <p><img src={image5} className="sliderimg" /></p>
        </AliceCarousel>
        </div>
        </div>
        )}
      </div>
    </Router>
  );
}

export default App;
