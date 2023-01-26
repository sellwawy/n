import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sky_logo from "../assets/img/movie.png";
import Menus from "./Menu/Menu";
import Drawers from "./drawer";
import { Menu } from "antd";
import { connect } from "react-redux";
import { search } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ movieDatas }) => {
  const [open, setOpen] = useState(false);
  const name = useSelector(state => state.movieName);
  const SubMenu = Menu.SubMenu;
  const dispatch = useDispatch();
  const MenuItemGroup = Menu.ItemGroup;
  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="head-wrapper" id="header-view">
        <div className="header-bar">
          <div className="header-outer-wrapper">
            <div className="header-inner-wrapper">
              <div className="logo-wrapper">
                {/* Left Sidebar Hamburger */}

                <div className="header-left-container">
                  <a
                    className="hidden-b1 toggle-navigation btn btn--icon"
                    onClick={() => handleChange()}
                  >
                    <span className="hamburger">
                      <i className="fa-solid fa-bars"></i>
                    </span>
                    <span className="text hidden-b3 hidden-xs">Browse</span>
                  </a>
                </div>

                {/* Main Logo */}
                <Link to="/" className="logo-anchor anchor">
                  <picture className="logo">
                    <img
                      className="main-logo"
                      src={sky_logo}
                      alt="sky_store_logo"
                    />
                  </picture>
                </Link>

                {/* Right Nav Sign in  | SignUp and Search Bar */}

                <div className="header-right-container search-hidden">
                  <nav className="top-user-menu-wrapper">
                    <ul className="top-user-menu">
                      <li
                        className="menu-item"
                        data-cta="sign-in navigation-header--sign-in"
                      >
                        <Link to="/login" className="anchor">
                          <span className="text">Sign In</span>
                        </Link>
                      </li>

                      <li
                        className="menu-item"
                        data-cta="sign-up navigation-header--sign-up"
                      >
                        <Link to="/register" className="anchor">
                          <span className="text">Sign Up</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="search-inner-wrapper">
                    <section className="search-input__container hide-search">
                      <div className="search-input">
                        <input
                          className="search-input__textbox"
                          placeholder="Search for title, actors, directors"
                          value={name}
                          style={{ color: "black" }}
                          onChange={e => {
                            dispatch(search(e.target.value));
                          }}
                        />
                        <span className="search-active">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Short Search Button */}
                <div className="toggle-search hidden-b1">
                  <div className="google-cast-button"></div>
                  <button className="btn btn--icon icon-clip-fix">
                    <span className="search-text">Cancel</span>
                    <span className="search-icon">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <Menus />
          </div>
        </div>
        {/* Todo Drawer Component */}
        {open && (
          // <Drawers />
          <div id="mySidebar" class="sidebar" style={{ width: "65%" }}>
            <a onClick={() => handleChange()} class="closebtn">
              C
            </a>
            <div className="home">
              <a href="#">Home</a>
              <div className="border"></div>
            </div>
            <div className="users">
              <a href="/login">Sign In</a>
              <a href="/register">Sign Up</a>
              <div className="border"></div>
            </div>
            <div className="movie">
              <a href="/New-To-Rent/5">Movies</a>
              <a href="/Sky-Store-Premiere/16">Sky Store Premier</a>
              <a href="/Sale/10">Sale</a>
              <a href="/Sky-Vip-Gifts/12">Sky VIP</a>
              <a href="/Most-Popular/16">TV</a>
              <div className="border"></div>
              <a href="/redeem">Redeem Voucher</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
function mapStateToProps(state) {
  return {
    state
  };
}
export default connect(mapStateToProps, {
  search
})(Header);
