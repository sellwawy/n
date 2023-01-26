import React, { useState } from "react";
import "./Navbar.css";

const Drawers = ({ movieDatas }) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    console.log("Drawer Clicked");
    setOpen(!open);
  };

  return (
    <>
      <div
        id="mySidebar"
        class="sidebar"
        style={{ width: "65%", visibility: open ? "hidden" : "visible" }}
      >
        <a onClick={() => handleChange()} class="closebtn">
          Close
        </a>
        <div className="home">
          <a href="#">Home</a>
          <div className="border"></div>
        </div>
        <div className="users">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
          <div className="border"></div>
        </div>
        <div className="movie">
          <a href="/">Movies</a>
          <a href="/Sky-Store-Premiere">Sky Store Premier</a>
          <a href="/Sale">Sale</a>
          <a href="/Sky-Vip-Gifts">Sky VIP</a>
          <a href="#">TV</a>
          <div className="border"></div>
          <a href="/redeem">Redeem Voucher</a>
        </div>
      </div>
    </>
  );
};

export default Drawers;
