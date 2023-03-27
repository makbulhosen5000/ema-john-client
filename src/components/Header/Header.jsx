import React from 'react';
import logo from '../../assets/images/Logo.svg';

const Header = () => {
    return (
  
            <div className="navbar bg-neutral text-neutral-content justify-between">
                <img src={logo} className=" normal-case text-xl" alt="" />
                <div className="flex-none ">
                    <ul className="menu menu-horizontal px-1 gap-10 cursor-pointer">
                    <li>Order</li>
                    <li>Order Details</li>
                    <li>Manage Inventory</li>
                    <li>Login</li>
                    </ul>
                </div>
            </div>


    );
};

export default Header;