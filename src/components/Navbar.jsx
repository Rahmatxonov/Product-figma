import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import email from "../assets/images/icons/email.svg";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed w-full bg-white z-10 top-0">
        <div className="top bg-black w-full h-[50px] pt-3">
          <div className="container flex text-white items-center justify-between">
            <div className="flex items-center">
              <img src={email} alt="email" />
              <p className="ps-3">Hello@colorlib.com</p>
              <span className="line ms-4"></span>
              <p className="ps-4">Free Shipping for all order of $99</p>
            </div>
            <div className="flex items-center">
              <div className="icons flex items-center gap-x-[20px] text-[20px] me-4">
                <FaFacebookSquare />
                <FaWhatsappSquare />
                <FaLinkedin />
                <IoLogoTwitter />
              </div>
              <span className="line me-4"></span>
              <FaRegUser />
              <p className="ps-2">Login</p>
            </div>
          </div>
        </div>
        <div className="navbar bg-white pt-4 pb-4 z-10">
          <div className="container flex items-center justify-between">
            <NavLink to={"/"} className="flex-shrink-0">
              <img src={logo} alt="logo" className="h-8 " />
            </NavLink>
            <div className="flex items-center">
              <div className="hidden md:block">
                <ul className="flex gap-x-6 uppercase">
                  <li>
                    <NavLink to={"/"} activeclassname="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/shop"} activeclassname="active">
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/pages"} activeclassname="active">
                      Pages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/blog"} activeclassname="active">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"} activeclassname="active">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-3 items-center">
              <FaRegHeart className="heart" />
              <AiOutlineShopping />
              <span>
                item:<b>$150.00</b>
              </span>
            </div>
            <div className="ml-6 md:hidden">
              {isOpen ? (
                <IoCloseSharp
                  onClick={toggleMenu}
                  className="text-gray-600 focus:outline-none text-[25px]"
                />
              ) : (
                <RiMenu3Line
                  onClick={toggleMenu}
                  className="text-gray-600 focus:outline-none text-[25px]"
                />
              )}
            </div>
          </div>
          {isOpen && (
            <ul className="md:hidden bg-[aqua] mt-4 text-center h-[100vh]">
              <li className="pt-[20px] text-[25px] ">
                <NavLink to={"/"} activeclassname="active" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="pt-[20px] text-[25px] ">
                <NavLink
                  to={"/shop"}
                  activeclassname="active"
                  onClick={toggleMenu}
                >
                  Shop
                </NavLink>
              </li>
              <li className="pt-[20px] text-[25px] ">
                <NavLink
                  to={"/pages"}
                  activeclassname="active"
                  onClick={toggleMenu}
                >
                  Pages
                </NavLink>
              </li>
              <li className="pt-[20px] text-[25px] ">
                <NavLink
                  to={"/blog"}
                  activeclassname="active"
                  onClick={toggleMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li className="pt-[20px] text-[25px] ">
                <NavLink
                  to={"/contact"}
                  activeclassname="active"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
