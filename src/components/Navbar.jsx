import React from 'react';
import logo from '../images/logo.PNG';
import navimage from '../images/faltu-image-on-navigation-bar.PNG';
import menu_bar from '../images/menu_bar.png';

const Navbar = () => {
    return (
        <div className="nav h-18 bg-navBackground px-4 md:px-24 flex items-end justify-between">
            {/* Left Section */}
            <div className="flex items-end space-x-2">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                <span className="text-2xl font-bold text-titlecolor1 mb-2 md:text-titlecolorres1">Penguin</span>
                <span className="text-2xl font-bold text-titlecolor2 mb-2"> Fashion</span>
                <img src={navimage} alt="" className="h-12 w-15 mb-4 ml-4 hidden md:block" />
            </div>

            {/* Right Section */}
            <div className="right_nav">
                <ul className="flex space-x-14 justify-between mb-2 hidden md:flex">
                    <li>
                        <a href="#" className="text-navfontcolor font-bold">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-navfontcolor font-bold">Product</a>
                    </li>
                    <li>
                        <a href="#" className="text-navfontcolor font-bold">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="text-navfontcolor font-bold">Contact Us</a>
                    </li>
                </ul>
                <div className="md:hidden flex justify-center items-center mb-1">
                    <img src={menu_bar} alt="menu_bar" className="h-8 w-8" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
