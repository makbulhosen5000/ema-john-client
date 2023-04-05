import React from "react";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content justify-between">
      <img src={logo} className=" normal-case text-xl" alt="" />
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 gap-10 cursor-pointer">
          <Link to="/">Shop</Link>
          <Link to="/order">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
