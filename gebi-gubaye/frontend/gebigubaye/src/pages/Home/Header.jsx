import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../../Images/logo.jpg";
import "../Home/home.css"
function Header() {
    const [show, setShow] = useState(false)
    function navBar() {
        setShow(!show)
    }
  return (
   
      <div className="nav-bar">
        <div className="logo">
         
            <img src={Logo} className="logo-img" />
            <h2 className="title">5K Gebi Gubaye</h2>
         
              </div>
          
              
              {show ? ( <div className="nav-links">
                  <button className="close-btn" onClick={navBar}>X</button>
                  <Router>
                    <Link className="links">Home</Link>
                    <Link className="links">About</Link>
                    <Link className="links">Course</Link>
                    <Link className="links">Registration</Link>
                    <Link className="links">Announcement</Link>
                  </Router>
                </div>) : ( <button onClick={navBar} className="ham-btn">Nav</button>)}
             
      </div>
    
  );
}

export default Header;
