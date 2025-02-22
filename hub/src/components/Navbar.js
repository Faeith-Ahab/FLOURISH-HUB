import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({ setActivePage }) => {
  return (
    <div className="container">
      <nav>

        <div className="row-container">
        
        
          <Link to="/">HOME</Link>
          <Link to="/reporting">REPORTING</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/chatpage">CHAT</Link>
          
          
        </div>
        
      </nav>
     
    </div>



  );
};

export default Navbar;