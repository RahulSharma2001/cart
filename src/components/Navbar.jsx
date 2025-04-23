import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ totalQuantity }) => {
  return (
    <div className="navbar-container">
      <div className="brand">
        <h1>AwesomeCart</h1>
      </div>
      <div className="navbar">
        <ul>
          <li className="cart-icon">
            <IoCartOutline />
            <p>{totalQuantity}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
