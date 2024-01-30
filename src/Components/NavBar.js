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
          <ul className="nav-items-links">
            <li className="nav-item">
            <a href="#" className="link-men">
              <span className="span-men">Men</span>
              
            </a>
            <div className="men-wear">
                <li className="men-wear-items-odd"><ul>
                  <li className="men-wear-items-name">Topwear</li>
                  <li className="men-wear-items-link">Bottomwear</li>
                  <li className="men-wear-items-link">Innerwear</li>
                  <li className="men-wear-items-link">Footwear</li>
                  <li className="men-wear-items-link">Watches</li>
                  <li className="men-wear-items-link">Accessories</li>
                </ul></li>

                <li className="men-wear-items-even"><ul>
                  <li className="men-wear-items-name">Bottomwear</li>
                  <li className="men-wear-items-link"> Bottomwear</li>
                  <li className="men-wear-items-link">Innerwear</li>
                  <li className="men-wear-items-link">Footwear</li>
                  <li className="men-wear-items-link">Watches</li>
                  <li className="men-wear-items-link">Accessories</li>
                </ul></li>

                <li className="men-wear-items-odd"><ul>
                  <li className="men-wear-items-name">Footwear</li>
                  <li className="men-wear-items-link">Bottomwear</li>
                  <li className="men-wear-items-link">Innerwear</li>
                  <li className="men-wear-items-link">Footwear</li>
                  <li className="men-wear-items-link">Watches</li>
                  <li className="men-wear-items-link">Accessories</li>
                </ul></li>
                <li className="men-wear-items-even"><ul>
                  <li className="men-wear-items-name" >sportwear</li>
                  <li className="men-wear-items-link">Bottomwear</li>
                  <li className="men-wear-items-link">Innerwear</li>
                  <li className="men-wear-items-link">Footwear</li>
                  <li className="men-wear-items-link">Watches</li>
                  <li className="men-wear-items-link">Accessories</li>
                </ul></li>
                <li className="men-wear-items-odd"><ul>
                  <li className="men-wear-items-name">faision</li>
                  <li className="men-wear-items-link">Bottomwear</li>
                  <li className="men-wear-items-link">Innerwear</li>
                  <li className="men-wear-items-link">Footwear</li>
                  <li className="men-wear-items-link">Watches</li>
                  <li className="men-wear-items-link">Accessories</li>
                </ul></li>
                
              </div>
              </li>
            <a href="#" className="link-women">
              <span>Women</span>
              <div className="women-wear">
                <li className="women-wear-items-odd"><ul>
                  <li className="women-wear-items-name">Topwear</li>
                  <li className="women-wear-items-link">Bottomwear</li>
                  <li className="women-wear-items-link">Innerwear</li>
                  <li className="women-wear-items-link">Footwear</li>
                  <li className="women-wear-items-link">Watches</li>
                  <li className="women-wear-items-link">Accessories</li>
                </ul></li>

                <li className="women-wear-items-even"><ul>
                  <li className="women-wear-items-name">Bottomwear</li>
                  <li className="women-wear-items-link"> Bottomwear</li>
                  <li className="women-wear-items-link">Innerwear</li>
                  <li className="women-wear-items-link">Footwear</li>
                  <li className="women-wear-items-link">Watches</li>
                  <li className="women-wear-items-link">Accessories</li>
                </ul></li>

                <li className="women-wear-items-odd"><ul>
                  <li className="women-wear-items-name">Footwear</li>
                  <li className="women-wear-items-link">Bottomwear</li>
                  <li className="women-wear-items-link">Innerwear</li>
                  <li className="women-wear-items-link">Footwear</li>
                  <li className="women-wear-items-link">Watches</li>
                  <li className="women-wear-items-link">Accessories</li>
                </ul></li>
                <li className="women-wear-items-even"><ul>
                  <li className="women-wear-items-name" >sportwear</li>
                  <li className="women-wear-items-link">Bottomwear</li>
                  <li className="women-wear-items-link">Innerwear</li>
                  <li className="women-wear-items-link">Footwear</li>
                  <li className="women-wear-items-link">Watches</li>
                  <li className="women-wear-items-link">Accessories</li>
                </ul></li>
                <li className="women-wear-items-odd"><ul>
                  <li className="women-wear-items-name">faision</li>
                  <li className="women-wear-items-link">Bottomwear</li>
                  <li className="women-wear-items-link">Innerwear</li>
                  <li className="women-wear-items-link">Footwear</li>
                  <li className="women-wear-items-link">Watches</li>
                  <li className="women-wear-items-link">Accessories</li>
                </ul></li>
                
              </div>
            </a>
           

            <a href="#" className="link-kids">
              <span>Kids</span>
              <div className="kids-wear">
                <li className="kids-wear-items-odd"><ul>
                  <li className="kids-wear-items-name">Topwear</li>
                  <li className="kids-wear-items-link">Bottomwear</li>
                  <li className="kids-wear-items-link">Innerwear</li>
                  <li className="kids-wear-items-link">Footwear</li>
                  <li className="kids-wear-items-link">Watches</li>
                  <li className="kids-wear-items-link">Accessories</li>
                </ul></li>

                <li className="kids-wear-items-even"><ul>
                  <li className="kids-wear-items-name">Bottomwear</li>
                  <li className="kids-wear-items-link"> Bottomwear</li>
                  <li className="kids-wear-items-link">Innerwear</li>
                  <li className="kids-wear-items-link">Footwear</li>
                  <li className="kids-wear-items-link">Watches</li>
                  <li className="kids-wear-items-link">Accessories</li>
                </ul></li>

                <li className="kids-wear-items-odd"><ul>
                  <li className="kids-wear-items-name">Footwear</li>
                  <li className="kids-wear-items-link">Bottomwear</li>
                  <li className="kids-wear-items-link">Innerwear</li>
                  <li className="kids-wear-items-link">Footwear</li>
                  <li className="kids-wear-items-link">Watches</li>
                  <li className="kids-wear-items-link">Accessories</li>
                </ul></li>
                <li className="kids-wear-items-even"><ul>
                  <li className="kids-wear-items-name" >sportwear</li>
                  <li className="kids-wear-items-link">Bottomwear</li>
                  <li className="kids-wear-items-link">Innerwear</li>
                  <li className="kids-wear-items-link">Footwear</li>
                  <li className="kids-wear-items-link">Watches</li>
                  <li className="kids-wear-items-link">Accessories</li>
                </ul></li>
                <li className="kids-wear-items-odd"><ul>
                  <li className="kids-wear-items-name">faision</li>
                  <li className="kids-wear-items-link">Bottomwear</li>
                  <li className="kids-wear-items-link">Innerwear</li>
                  <li className="kids-wear-items-link">Footwear</li>
                  <li className="kids-wear-items-link">Watches</li>
                  <li className="kids-wear-items-link">Accessories</li>
                </ul></li>
                
              </div>
            </a>

            <a href="#" className="link-home">
              <span>Home&Living</span>
              <div className="home-wear">
                <li className="home-wear-items-odd"><ul>
                  <li className="home-wear-items-name">Topwear</li>
                  <li className="home-wear-items-link">Bottomwear</li>
                  <li className="home-wear-items-link">Innerwear</li>
                  <li className="home-wear-items-link">Footwear</li>
                  <li className="home-wear-items-link">Watches</li>
                  <li className="home-wear-items-link">Accessories</li>
                </ul></li>

                <li className="home-wear-items-even"><ul>
                  <li className="home-wear-items-name">Bottomwear</li>
                  <li className="home-wear-items-link"> Bottomwear</li>
                  <li className="home-wear-items-link">Innerwear</li>
                  <li className="home-wear-items-link">Footwear</li>
                  <li className="home-wear-items-link">Watches</li>
                  <li className="home-wear-items-link">Accessories</li>
                </ul></li>

                <li className="home-wear-items-odd"><ul>
                  <li className="home-wear-items-name">Footwear</li>
                  <li className="home-wear-items-link">Bottomwear</li>
                  <li className="home-wear-items-link">Innerwear</li>
                  <li className="home-wear-items-link">Footwear</li>
                  <li className="home-wear-items-link">Watches</li>
                  <li className="home-wear-items-link">Accessories</li>
                </ul></li>
                <li className="home-wear-items-even"><ul>
                  <li className="home-wear-items-name" >sportwear</li>
                  <li className="home-wear-items-link">Bottomwear</li>
                  <li className="home-wear-items-link">Innerwear</li>
                  <li className="home-wear-items-link">Footwear</li>
                  <li className="home-wear-items-link">Watches</li>
                  <li className="home-wear-items-link">Accessories</li>
                </ul></li>
                <li className="home-wear-items-odd"><ul>
                  <li className="home-wear-items-name">faision</li>
                  <li className="home-wear-items-link">Bottomwear</li>
                  <li className="home-wear-items-link">Innerwear</li>
                  <li className="home-wear-items-link">Footwear</li>
                  <li className="home-wear-items-link">Watches</li>
                  <li className="home-wear-items-link">Accessories</li>
                </ul></li>
                
              </div>
            </a>

            <a href="#" className="link-beauty">
              <span>Beauty</span>
              <div className="beauty-wear">
                <li className="beauty-wear-items-odd"><ul>
                  <li className="beauty-wear-items-name">Topwear</li>
                  <li className="beauty-wear-items-link">Bottomwear</li>
                  <li className="beauty-wear-items-link">Innerwear</li>
                  <li className="beauty-wear-items-link">Footwear</li>
                  <li className="beauty-wear-items-link">Watches</li>
                  <li className="beauty-wear-items-link">Accessories</li>
                </ul></li>

                <li className="beauty-wear-items-even"><ul>
                  <li className="beauty-wear-items-name">Bottomwear</li>
                  <li className="beauty-wear-items-link"> Bottomwear</li>
                  <li className="beauty-wear-items-link">Innerwear</li>
                  <li className="beauty-wear-items-link">Footwear</li>
                  <li className="beauty-wear-items-link">Watches</li>
                  <li className="beauty-wear-items-link">Accessories</li>
                </ul></li>

                <li className="beauty-wear-items-odd"><ul>
                  <li className="beauty-wear-items-name">Footwear</li>
                  <li className="beauty-wear-items-link">Bottomwear</li>
                  <li className="beauty-wear-items-link">Innerwear</li>
                  <li className="beauty-wear-items-link">Footwear</li>
                  <li className="beauty-wear-items-link">Watches</li>
                  <li className="beauty-wear-items-link">Accessories</li>
                </ul></li>
                <li className="beauty-wear-items-even"><ul>
                  <li className="beauty-wear-items-name" >sportwear</li>
                  <li className="beauty-wear-items-link">Bottomwear</li>
                  <li className="beauty-wear-items-link">Innerwear</li>
                  <li className="beauty-wear-items-link">Footwear</li>
                  <li className="beauty-wear-items-link">Watches</li>
                  <li className="beauty-wear-items-link">Accessories</li>
                </ul></li>
                <li className="beauty-wear-items-odd"><ul>
                  <li className="beauty-wear-items-name">faision</li>
                  <li className="beauty-wear-items-link">Bottomwear</li>
                  <li className="beauty-wear-items-link">Innerwear</li>
                  <li className="beauty-wear-items-link">Footwear</li>
                  <li className="beauty-wear-items-link">Watches</li>
                  <li className="beauty-wear-items-link">Accessories</li>
                </ul></li>
                
              </div>
            </a>

            <a href="#" className="link-studio">
              <span>Studio</span>
              <div className="studio-wear">
                <li className="studio-wear-items-odd"><ul>
                  <li className="studio-wear-items-name">Topwear</li>
                  <li className="studio-wear-items-link">Bottomwear</li>
                  <li className="studio-wear-items-link">Innerwear</li>
                  <li className="studio-wear-items-link">Footwear</li>
                  <li className="studio-wear-items-link">Watches</li>
                  <li className="studio-wear-items-link">Accessories</li>
                </ul></li>

                <li className="studio-wear-items-even"><ul>
                  <li className="studio-wear-items-name">Bottomwear</li>
                  <li className="studio-wear-items-link"> Bottomwear</li>
                  <li className="studio-wear-items-link">Innerwear</li>
                  <li className="studio-wear-items-link">Footwear</li>
                  <li className="studio-wear-items-link">Watches</li>
                  <li className="studio-wear-items-link">Accessories</li>
                </ul></li>

                <li className="studio-wear-items-odd"><ul>
                  <li className="studio-wear-items-name">Footwear</li>
                  <li className="studio-wear-items-link">Bottomwear</li>
                  <li className="studio-wear-items-link">Innerwear</li>
                  <li className="studio-wear-items-link">Footwear</li>
                  <li className="studio-wear-items-link">Watches</li>
                  <li className="studio-wear-items-link">Accessories</li>
                </ul></li>
                <li className="studio-wear-items-even"><ul>
                  <li className="studio-wear-items-name" >sportwear</li>
                  <li className="studio-wear-items-link">Bottomwear</li>
                  <li className="studio-wear-items-link">Innerwear</li>
                  <li className="studio-wear-items-link">Footwear</li>
                  <li className="studio-wear-items-link">Watches</li>
                  <li className="studio-wear-items-link">Accessories</li>
                </ul></li>
                <li className="studio-wear-items-odd"><ul>
                  <li className="studio-wear-items-name">faision</li>
                  <li className="studio-wear-items-link">Bottomwear</li>
                  <li className="studio-wear-items-link">Innerwear</li>
                  <li className="studio-wear-items-link">Footwear</li>
                  <li className="studio-wear-items-link">Watches</li>
                  <li className="studio-wear-items-link">Accessories</li>
                </ul></li>
                
              </div>
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
