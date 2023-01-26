import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nav-bar-wrapper">
      <nav className="nav-bar">
        <ul className="parent menu-level-0 ">
          <li className="menu-item menu-item-level-0">
            <NavLink exact={true} to="/" className="anchor">
              <span className="menu-text">Home</span>
            </NavLink>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/New-To-Rent/5" className="anchor">
              <span className="menu-text">Movies</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/New-To-Rent/5" className="anchor">
                  <span className="text">New To Rent</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/New-To-Buy/6" className="anchor">
                  <span className="text">New To Buy</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Pre-Order/10" className="anchor">
                  <span className="text">Pre-Order</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Movie-Box-Seats/15" className="anchor">
                  <span className="text">Movie Box Sets</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Official-Film-Chart/10" className="anchor">
                  <span className="text">Official Film Chart</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Browse/12" className="anchor">
                  <span className="text">Browse</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/A-To-Z/15" className="anchor">
                  <span className="text">A to Z</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/Sky-Store-Premiere/16" className="anchor">
              <span className="menu-text">Sky Store Premiere</span>
            </NavLink>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/Sale/10" className="anchor">
              <span className="menu-text">Sale</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Super-Hero-Savings/5" className="anchor">
                  <span className="text">Superhero savings</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Store-Picks/5" className="anchor">
                  <span className="text">Store Picks</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Under-3/10" className="anchor">
                  <span className="text">Under £3</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Under-4/10" className="anchor">
                  <span className="text">Under £4</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Under-5/15" className="anchor">
                  <span className="text">Under £5</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/Sky-Vip-Gifts/12" className="anchor">
              <span className="menu-text">Sky VIP</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Sky-Vip-Gifts/12" className="anchor">
                  <span className="text">Sky VIP Gifts</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/Most-Popular/13" className="anchor">
              <span className="menu-text">TV</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Most-Popular/16" className="anchor">
                  <span className="text">Most Popular</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/New-To-Store/18" className="anchor">
                  <span className="text">New To Store</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Drama/16" className="anchor">
                  <span className="text">Drama</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Comedy/15" className="anchor">
                  <span className="text">Comedy</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/Kids/5" className="anchor">
                  <span className="text">Kids</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/All/8" className="anchor">
                  <span className="text">All</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu-item menu-item-level-0 highlighted">
            <NavLink to="/redeem" className="anchor">
              <span className="menu-text">Redeem Voucher</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
