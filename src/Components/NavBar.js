import React from "react";
import "../Css/NavBar.css";
function NavBar() {
  return (
    
<div className="nav-container">
      <div className="logo">
        <img className="logo-image" src="./logo.png" alt="myntra-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          
            <a href="#">
              <span>Men</span>
            </a>
        
          
            <a href="#">
              <span>Women</span>
            </a>
          
          
            <a href="#">
              <span>Kids</span>
            </a>
          
          
            <a href="#">
              <span>Home&Living</span>
            </a>
          
          
            <a href="#">
              <span>Beauty</span>
            </a>
          
          
            <a href="#">
              <span>Studio</span>
            </a>
          
        </ul>
      </div>
      <div className="nav-search-bar">
        <input type="text" placeholder="Search for products, brands and more"/>
      </div>
      <div className="nav-menus">
        <ul>
            <li><span>Profile</span></li>
            <li><span>Wishlist</span></li>
            <li><span>Bag</span></li>
        </ul>
      </div>
    </div>
  
    
  );
}

export default NavBar;
