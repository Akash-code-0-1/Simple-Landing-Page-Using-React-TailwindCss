import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import welcomeImage from '../images/logo-shoe.PNG';

const HeaderSection = () => {
  return (
    <div className="welcome_section bg-navBackground flex flex-col md:flex-row flex-col-reverse items-center justify-between md:p-12 bg-[navBackgroun]">
      {/* Left Section */}
      <div className="relative ml-12 md:w-1/2">
        <img
          src={welcomeImage}
          alt=""
          className="w-3/4 mx-0 md:mx-0"
        />
      </div>

      {/* Right Section */}
      <div className="text-left px-2 py-5 md:text-left md:w-1/2">
        {/* Title */}
        <span className="font-bebas tracking-wider text-4xl md:text-7xl text-titlecolorres1 font-bold">NIKE REACT</span>
        <br />
        <span className="font-bebas tracking-wider text-4xl md:text-7xl font-bold text-titlecolor2">INFINITY RUN 2</span>
        <p className="mt-4 text-black-600 text-left">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 flex items-center justify-start">
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          BUY NOW
        </button>
      </div>

    </div>
  );
};

export default HeaderSection;
