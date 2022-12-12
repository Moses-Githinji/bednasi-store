import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EastIcon from "@mui/icons-material/East";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";
import router from "next/router";

function NavBar() {
  const [isHovering, setIsHovering] = useState(false);
  const [isCartHovering, setIsCartHovering] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  //   Shows The Login Element
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  //   Closes The Login Element
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  //   Shows The Cart Items Element
  const onMouseOver = () => {
    setIsCartHovering(true);
  };

  //   Closes The Cart Items Element
  const onMouseOut = () => {
    setIsCartHovering(false);
  };

  //   Opens The Search View
  const openSearchDiv = () => {
    setShowSearch(true);
  };

  //   Closes The Search View
  const closeSearchDiv = () => {
    setShowSearch(false);
  };

  const toShoppingHandler = () => {
    router.push("/shop");
  };

  //   Shows The Side Bar
  const openSideBar = () => {
    setShowSideBar(true);
  };

  //   Closes The Side Bar
  const closeSideBar = () => {
    setShowSideBar(false);
  };

  const submitSearch = () => {
    console.log("clicked");
  };

  return (
    <div className="nav-container">
      <div className="hamburger-logo-container">
        <div className="haamburger-container">
          <MenuOutlinedIcon
            sx={{ fontSize: 30, cursor: "pointer", color: "#A20401" }}
          />
        </div>
        <div className="logo-container">
          <Link href="/" className="link-style-logo">
            <p className="logo">BedNasi</p>
          </Link>
        </div>
      </div>
      <div className="nav-routes-container">
        <div className="about-us-container">
          <a href="/about" className="link-style">
            About
          </a>
          <a href="/shop" className="link-style">
            Shop
          </a>
          <a href="/blog" className="link-style">
            Blog
          </a>
          <a href="/contact" className="link-style">
            Contact Us
          </a>
        </div>
      </div>
      <div className="icons-container">
        <div className="search-icon-container" onClick={openSearchDiv}>
          <SearchIcon
            className="search"
            sx={{ fontSize: 20, cursor: "pointer" }}
          />
        </div>
        <div
          className="account-icon-container"
          onClick={handleMouseOver}
          //   onMouseOut={handleMouseOut}
        >
          <AccountCircleOutlinedIcon
            className="search"
            sx={{ fontSize: 20, cursor: "pointer" }}
          />
        </div>
        <div className="favourite-icon-container">
          <span className="items-count">0</span>
          <FavoriteBorderOutlinedIcon
            className="search"
            sx={{ fontSize: 20, cursor: "pointer" }}
          />
        </div>
        <div
          className="shopping-cart-icon-container"
          onClick={onMouseOver}
          //   onMouseOut={onMouseOut}
        >
          <span className="items-count">0</span>
          <ShoppingBasketOutlinedIcon
            className="search"
            sx={{ fontSize: 20, cursor: "pointer" }}
          />
        </div>
      </div>
      {/* Login Container Shows on hover */}
      {isHovering && (
        <div className="sign-in-container">
          <button onClick={handleMouseOut} className="clear-btn-icon">
            <ClearIcon
              className="search clear-icon login"
              sx={{
                fontSize: 25,
                cursor: "pointer",
              }}
            />
          </button>
          <div className="desc-container">
            <p className="desc-large">Login</p>
          </div>
          <div className="email-input-container">
            <div className="email-desc-container">
              <p className="email-desc">Username or Email Address</p>
            </div>
            <div className="email-input-container">
              <input type="email" className="email-input" />
            </div>
          </div>
          <div className="password-input-container">
            <div className="password-desc-container">
              <p className="password-desc">Password</p>
            </div>
            <div className="password-input-container">
              <input type="password" className="password-input" />
            </div>
          </div>
          <div className="submit-btn-checkbox-container">
            <div className="submit-btn-container">
              <button type="submit" className="submit-btn">
                Login
              </button>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox-input" />
              <p className="checkbox-desc">Remember Me</p>
            </div>
          </div>
        </div>
      )}
      {/* Shopping Cart Container shows on hover */}
      {isCartHovering && (
        <div className="shopping-cart-container">
          <button onClick={onMouseOut} className="clear-btn-icon">
            <ClearIcon
              className="search clear-icon login"
              sx={{
                fontSize: 25,
                cursor: "pointer",
              }}
            />
          </button>
          <div className="desc-container">
            <p className="desc-large">Cart(0)</p>
          </div>
          <div className="email-desc-container">
            <p className="email-desc">Your cart is currently empty</p>
          </div>
          <div className="to-shopping-container">
            <p className="to-shopping-desc" onClick={toShoppingHandler}>
              continue shopping
            </p>
            <EastIcon />
          </div>
        </div>
      )}
      {/* Show the Search Component on hover */}
      {showSearch && (
        <div className="search-container">
          <div className="clear-icon-container">
            <button onClick={closeSearchDiv} className="clear-btn-icon">
              <ClearIcon
                className="search clear-icon "
                sx={{
                  fontSize: 25,
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
          <div className="search-desc-container">
            <p className="search-desc">Search For Products</p>
          </div>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
            <button className="search-input-btn" onClick={submitSearch}>
              <SearchIcon
                className="search search-icon"
                sx={{ fontSize: 20, cursor: "pointer" }}
              />
            </button>
          </div>
          <div className="categories-search-container">
            <div className="categories-search-desc">
              <p>Popular Searches:</p>
            </div>
            <div className="product-categories-container">
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Furniture</div>
              </a>
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Sofa</div>
              </a>
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Outdoor</div>
              </a>
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Kitchen</div>
              </a>
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Bedroom</div>
              </a>
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Bathroom</div>
              </a>
              <a href="#" className="search-product-by-category">
                <div className="individual-category">Offices</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
