import React, { useEffect, useState } from "react";
import "../Css/SideBar.css";
import "../Css/NavBar.css";
function NavBar() {
  const handleResize = () => {
    const sideBar = document.getElementById("side-bar");
    sideBar.style.display = "none";
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openSideBar = () => {
    const sideBar = document.getElementById("side-bar");
    sideBar.style.display = "flex";
  };
  const closeSideBar = () => {
    const sideBar = document.getElementById("side-bar");
    sideBar.style.display = "none";
  };
  return (
    <>
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
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="bar-menus" 
         onClick={openSideBar}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="nav-menus">
          <ul>
            <li className="profile">
              <i class="fa-solid fa-user"></i>
              <span>Profile</span>
            </li>
            <li className="wishlist">
              <i class="fa-solid fa-heart"></i>
              <span>Wishlist</span>
            </li>
            <li className="bag">
              <i class="fa-solid fa-bag-shopping"></i>
              <span>Bag</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="side-container" id="side-bar">
        <div className="logo">
          <img className="logo-image" src="./logo.png" alt="myntra-logo"></img>
          <i class="fa-solid fa-xmark" onClick={closeSideBar}></i>
        </div>
        <div className="side-items">
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
        <div className="side-search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="side-menus">
          <ul>
            <li className="profile">
              <i class="fa-solid fa-user"></i>
              <span>Profile</span>
            </li>
            <li className="wishlist">
              <i class="fa-solid fa-heart"></i>
              <span>Wishlist</span>
            </li>
            <li className="bag">
              <i class="fa-solid fa-bag-shopping"></i>
              <span>Bag</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
