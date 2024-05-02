import "./Header.css";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import bg from "../assets/images/hdbg.png";
import Navbar from "./Navbar";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const selectMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="mt-[100px]">
      <Navbar />
      <div className="container">
        <div className="hero pt-[100px]">
          <div className="hero-left ">
            <div className="hero-select bg-[#7FAD39] w-[270px] h-[50px] flex items-center justify-between p-4 text-white text-[20px]">
              <IoMenu />
              <span>All Department</span>
              <IoIosArrowDown onClick={selectMenu} />
            </div>
          </div>

          <div className="hero-center flex items-center">
            <div className="hero-center-info flex items-center gap-x-2">
              <span className="flex items-center gap-x-3">
                <h2 className="font-bold text-[16px] text-[#2A2A2A]">
                  All Categories
                </h2>
                <IoIosArrowDown />
              </span>
              <span className="w-[1.5px] h-5 bg-[#888]"></span>
              <p>What do you need?</p>
            </div>
            <button className="bg-[#7FAD39] uppercase p-4 text-white font-bold">
              search
            </button>
          </div>
          <div className="hero-right flex items-center gap-x-[20px]">
            <span className="w-[50px] h-[50px] bg-[#F8F8FF] block rounded-[50%] p-4">
              <BsTelephoneInbound />
            </span>
            <span>
              <b>+65 11.188.888</b>
              <p>support 24/7 time</p>
            </span>
          </div>
        </div>
        <div className="hero-wrap relative">
          {menuOpen && (
            <div className="hero-menu w-[270px]">
              <p>fresh meat</p>
              <p>vegetables</p>
              <p>fruit & nut gifts</p>
              <p>fresh berries</p>
              <p>ocean foods</p>
              <p>butter & eggs</p>
              <p>fastfood</p>
              <p>fresh onion</p>
              <p>papayaya & crisps</p>
              <p>oatmeal</p>
              <p>fresh bananas</p>
            </div>
          )}
          <div className="hero-shop bg-[#F5F5F5] w-[850px] h-[441px] mt-5 absolute right-0 top-[5px] ">
            <div className="ms-[77px] ">
              <span className="font-[700] font-[16px] leading-[20px] text-[#7FAD39]">
                FRUIT FRESH
              </span>
              <h1 className="pt-[30px] font-[800] text-[40px] leading-[50px] text-[#2A2A2A]">
                Vegetable 100% Organic
              </h1>
              <p className="font-[400] text-[16px] leading-[20px] text-[#999999] pb-[60px] pt-[30px]">
                Free Pickup and Delivery Available
              </p>
              <button className="bg-[#7FAD39] shop-btn text-white font-[700] tetx-[16px] leading-[20px] ">
                SHOP NOW
              </button>
            </div>
            <img className="" src={bg} alt="headerbg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
