import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  
const { user, logOut } = useContext(AuthContext);
console.log("user--",user);

  // logout
  const handleLogOut = () => {
      logOut()
      .then(result=>{})
      .catch(error=>{
        console.log(error);
      })
  }
  return (
    <div className="navbar bg-neutral text-neutral-content justify-between">
      <img src={logo} className=" normal-case text-xl" alt="" />
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 gap-10 cursor-pointer">
          <Link to="/">Shop</Link>
          <Link to="/order">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
          {user && <span>{user.email}
          <button onClick={handleLogOut} className="bg-green-600 rounded-sm ml-2">Logout</button>
          </span>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
