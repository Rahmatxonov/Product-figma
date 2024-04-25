import "./Header.css";
import logo from "../assets/images/logo.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephoneInbound } from "react-icons/bs";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="fixed w-full bg-white pt-4 pb-4">
        <div className="container flex items-center justify-between">
          <NavLink exact to={"/"} className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-8 " />
          </NavLink>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex gap-x-6 uppercase">
                <li>
                  <NavLink exact to={"/"} activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/shop"} activeClassName="active">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/pages"} activeClassName="active">
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"} activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} activeClassName="active">
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
              <NavLink
                exact
                to={"/"}
                activeClassName="active"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="pt-[20px] text-[25px] ">
              <NavLink
                to={"/shop"}
                activeClassName="active"
                onClick={toggleMenu}
              >
                Shop
              </NavLink>
            </li>
            <li className="pt-[20px] text-[25px] ">
              <NavLink
                to={"/pages"}
                activeClassName="active"
                onClick={toggleMenu}
              >
                Pages
              </NavLink>
            </li>
            <li className="pt-[20px] text-[25px] ">
              <NavLink
                to={"/blog"}
                activeClassName="active"
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className="pt-[20px] text-[25px] ">
              <NavLink
                to={"/contact"}
                activeClassName="active"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
      <div className="container">
        <div className="hero flex items-center justify-between pt-[100px]">
          <div className="hero-left ">
            <select className="border border-gray-300  py-2 px-4 text-lg font-semibold bg-[#7FAD39] w-[270px] h-[50px]">
              <option className="text-lg font-semibold mt-5">
                All Department
              </option>
              <option>Fresh Bananas</option>
              <option>Fresh Meat</option>
              <option>Vegetables</option>
              <option>Fruit & Nut Gifts</option>
              <option>Fresh Berries</option>
              <option>Ocean Foods</option>
              <option>Butter & Eggs</option>
              <option>Fastfood</option>
              <option>Fresh Onion</option>
              <option>Papayaya & Crisps</option>
              <option>Oatmeal</option>
            </select>
          </div>
          <div className="hero-center flex items-center">
            <div className="hero-center-info flex items-center gap-x-2">
              <span className="flex items-center gap-x-3">
                <h2 className="font-extrabold text-[16px] text-[#2A2A2A]">
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
              <h3>+65 11.188.888</h3>
              <p>support 24/7 time</p>
            </span>
          </div>
        </div>
        <div className="header">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla cum,
            explicabo natus earum ullam facilis ducimus inventore fugiat dicta
            quisquam dolor quo, iure officia veniam harum? Sint atque dicta
            ipsam, fuga veniam ab nisi iste ratione natus provident cum et
            aliquam deleniti, ea praesentium assumenda repudiandae tempore esse
            voluptatem officiis! Ducimus modi consectetur odit tempore rerum
            optio dolor itaque omnis cupiditate, saepe natus delectus nesciunt
            iusto minus perferendis nam. Aliquam temporibus ratione quasi
            voluptatem harum, aliquid voluptates incidunt at voluptas qui vel,
            et est, dolorum eos eaque ipsam quos similique omnis! Voluptatem
            provident laboriosam est, assumenda molestias debitis, cupiditate
            magnam omnis modi, dolore ab animi necessitatibus! Assumenda
            laboriosam ex nobis, animi harum quod id sapiente corporis nam
            quibusdam beatae delectus vero repellendus veritatis deserunt autem,
            obcaecati magnam nostrum non, omnis ea? Soluta excepturi laborum
            culpa, quod quas ipsa dolorum iusto corrupti aliquid placeat aperiam
            eveniet enim sequi facilis ullam. Cum optio deserunt quasi ducimus
            repellendus odio quod dolores reiciendis. Molestiae, laboriosam. Vel
            porro aliquid natus cum magni culpa vero distinctio a saepe
            consequatur! Eaque aliquam reprehenderit facere eius illum, aut
            ratione corrupti voluptas numquam reiciendis! Ipsum placeat eaque
            molestiae nostrum ducimus cupiditate animi quidem minus praesentium,
            architecto explicabo quos nobis harum tempora illum! Ea error
            nesciunt amet consequatur, enim voluptatum aliquid eligendi vitae
            blanditiis commodi, quas consectetur, perspiciatis eaque sit
            molestias quam velit dolore beatae tempora pariatur delectus. Modi
            obcaecati nihil, adipisci in cum neque laboriosam blanditiis, dolore
            commodi quis soluta ratione, est iusto eveniet. Inventore aliquam
            ipsam tempore sequi corrupti laudantium tenetur rerum numquam, et
            saepe esse, error quasi molestias. Deleniti reprehenderit velit nisi
            fugiat repudiandae voluptas nostrum sapiente? Sit quae nulla dolores
            animi accusantium illo quibusdam, cum reiciendis quaerat ipsam,
            saepe doloribus architecto facere minima culpa dolor voluptatibus
            consectetur adipisci molestiae impedit nemo inventore placeat esse.
            Amet laudantium architecto harum minus quae velit labore delectus in
            quibusdam saepe sit natus blanditiis similique nostrum consequuntur
            vitae sed, voluptates rerum, magni fugit reprehenderit obcaecati
            iusto cumque distinctio. Earum inventore dolorem eius magnam itaque.
            Tempora ipsum, commodi ipsam, recusandae quae labore ullam, autem
            facilis deserunt laboriosam numquam. Voluptatum debitis distinctio
            similique nulla pariatur eaque, mollitia exercitationem at id sint
            dolorum ex animi quas cupiditate aspernatur labore voluptatem
            molestias ducimus quibusdam, sapiente ratione excepturi adipisci
            ipsam? Ipsum reprehenderit tempora ea aliquam mollitia laboriosam,
            exercitationem atque explicabo recusandae esse saepe quae, itaque
            sunt fugiat libero laborum ex voluptatem eaque adipisci, beatae
            aspernatur quia consequatur. Dicta iste molestias et officia ad eos
            in molestiae sint sit, voluptates architecto nemo delectus omnis
            autem rerum aliquid velit at recusandae voluptas, unde fugiat
            consequatur facilis esse. Enim neque fugit a libero tenetur odio
            molestiae sequi totam. Suscipit quibusdam itaque tempora aspernatur
            esse obcaecati optio ipsum? Vitae temporibus delectus accusamus cum.
            Similique facilis repellendus aperiam dolore. At non ipsa porro eum
            hic repellendus ratione architecto commodi accusantium impedit vel
            error laborum explicabo voluptatibus aperiam, numquam
            necessitatibus? Autem reiciendis nemo possimus quidem! Minus eos
            iste at ratione itaque nesciunt et sapiente aliquid? Non fugit
            assumenda laborum animi sint autem similique error minus rem?
            Expedita facilis repellendus molestiae dolore culpa exercitationem,
            excepturi, quam repudiandae ab quo eum consectetur vitae rem soluta
            commodi qui, neque est et officiis labore esse. Vel nulla officiis
            eum atque eius maxime labore minima corrupti tenetur! Animi
            explicabo dolor voluptatem provident. Corrupti velit aperiam facere
            quasi distinctio maxime necessitatibus odit id rem beatae veritatis
            rerum ad asperiores maiores, placeat porro aut hic ullam quaerat
            obcaecati, saepe dolorum debitis ipsam. Consequuntur quam, est
            necessitatibus similique incidunt, quibusdam rem laudantium ducimus
            mollitia, voluptatum cupiditate temporibus quaerat facilis itaque
            ullam neque dolorem dignissimos veritatis in dolores placeat
            dolorum! Odio quisquam molestiae quasi dicta maiores nihil deserunt
            vero impedit. Sunt libero voluptates deleniti laboriosam inventore?
            Provident, nobis iste. Porro, velit recusandae? Tempora, culpa
            debitis suscipit officiis illum facere ducimus a fugiat ipsam
            accusamus atque ad quas consequatur sed recusandae placeat inventore
            ullam vitae animi sint. Quis exercitationem facere commodi?
            Cupiditate error doloribus odio repellat ducimus ab porro aliquid ad
            libero vitae voluptate quis harum pariatur blanditiis atque ipsa
            reiciendis placeat adipisci deserunt, soluta labore! Molestiae
            magnam fugit minima est quia mollitia! Quae eaque repellat optio
            vitae impedit nostrum itaque, officia architecto nisi, nihil
            cupiditate recusandae blanditiis voluptatem repellendus deleniti in
            consequatur? Reiciendis maiores fugiat libero illo quaerat explicabo
            nemo tempora accusamus blanditiis, cum assumenda nam. Voluptatem a
            nesciunt error nulla adipisci enim doloribus sed sint expedita
            provident autem temporibus ducimus modi illum vero sapiente quod
            perferendis quae, molestias dolorem aliquam. Nisi deserunt,
            praesentium quibusdam voluptas culpa recusandae sequi consectetur
            possimus libero eum tenetur adipisci ut cum illo, soluta numquam
            fuga animi nostrum accusantium atque fugit ducimus amet porro. Unde
            vitae soluta, deleniti incidunt reiciendis laboriosam, quidem
            voluptates facere adipisci veniam iste quasi. Soluta tempore quae
            non laudantium quia numquam, autem voluptatem magni, ea voluptate
            neque. Illum nihil sed ab dolore autem maiores eos eius laboriosam
            est ullam, fuga libero sapiente reiciendis reprehenderit harum quis
            nostrum eligendi. Debitis saepe, nisi nam aut ipsum, nostrum
            officiis voluptatum rerum hic qui maxime expedita exercitationem! At
            unde nesciunt totam corporis eligendi, reprehenderit iure
            repellendus ut mollitia aliquam enim asperiores! Obcaecati
            voluptatum natus molestias beatae consectetur non magni, nihil porro
            ullam aliquid facilis quo voluptate maxime delectus quibusdam
            temporibus! Iusto, itaque totam distinctio architecto laborum
            consequatur sunt perferendis soluta voluptatum neque fugiat
            asperiores officia sed, deleniti eius mollitia molestias pariatur.
            Magnam mollitia, pariatur tenetur laborum quae quisquam ipsam odit
            voluptate vel, inventore saepe iure deserunt ducimus officia aperiam
            dignissimos, ab delectus ipsa! Cupiditate cumque odio architecto
            quas. Sunt sit nam dolor ullam repudiandae veritatis atque corrupti
            officia at enim expedita necessitatibus quaerat nihil commodi rerum
            amet est, cupiditate laboriosam deleniti accusamus totam illum.
            Eaque, architecto. Consequuntur fugiat eveniet cum esse natus,
            accusamus, magni sint tenetur quos unde ad molestiae dolor odio!
            Odio ea ipsam nisi neque necessitatibus! Eos cupiditate nemo,
            dolorem nam libero inventore, sit dolores voluptatum qui veniam
            nulla eligendi, quam deleniti corrupti ullam culpa consequuntur!
            Quod dicta asperiores consequatur, magni fugiat molestiae sed sit
            alias sunt iusto harum vero, vel facilis, velit iure.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
