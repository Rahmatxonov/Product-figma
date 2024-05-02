import React, { useEffect, useState } from "react";
import instance from "../api/Axios";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instance()
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const limitedProducts = products.slice(1, 4);
  const limitedRated = products.slice(4, 7);
  const limitedReview = products.slice(5, 8);
  return (
    <div className="container products flex items-center justify-between">
      <div className="latest-product">
        <div className="flex items-center gap-x-[80px]">
          <h3 className="font-[900] text-[24px] leading-[50px] text-[#2A2A2A]">
            Latest Product
          </h3>
          <div className="flex items-center space-x-3">
            <span className="arrow ">
              <MdOutlineKeyboardArrowLeft />
            </span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
        <div className="product-list">
          {limitedProducts.map((item) => (
            <div
              key={item.id}
              className="product-item flex items-center gap-x-[20px] mt-[20px]"
            >
              <img className="product-image" src={item.image} alt="fruits" />
              <span>
                <h4 className="font-[400] text-[20px] leading-[30px] text-[#2A2A2A]">
                  {item.titleEn}
                </h4>
                <b className="font-[900] text-[20px] leading-[30px] text-[#2A2A2A]">
                  $30.00
                </b>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rated-product">
        <div className="flex items-center gap-x-[50px]">
          <h3 className="font-[900] text-[24px] leading-[50px] text-[#2A2A2A]">
            Top rated Products
          </h3>
          <div className="flex items-center space-x-3">
            <span className="arrow ">
              <MdOutlineKeyboardArrowLeft />
            </span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
        <div className="product-list">
          {limitedRated.map((item) => (
            <div
              key={item.id}
              className="product-item flex items-center gap-x-[20px] mt-[20px]"
            >
              <img className="product-image" src={item.image} alt="fruits" />
              <span>
                <h4 className="font-[400] text-[20px] leading-[30px] text-[#2A2A2A]">
                  {item.titleEn}
                </h4>
                <b className="font-[900] text-[20px] leading-[30px] text-[#2A2A2A]">
                  $30.00
                </b>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="review-product">
        <div className="flex items-center gap-x-[50px]">
          <h3 className="font-[900] text-[24px] leading-[50px] text-[#2A2A2A]">
            Review Products
          </h3>
          <div className="flex items-center space-x-3">
            <span className="arrow ">
              <MdOutlineKeyboardArrowLeft />
            </span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
        <div className="product-list">
          {limitedReview.map((item) => (
            <div
              key={item.id}
              className="product-item flex items-center gap-x-[20px] mt-[20px]"
            >
              <img className="product-image" src={item.image} alt="fruits" />
              <span>
                <h4 className="font-[400] text-[20px] leading-[30px] text-[#2A2A2A]">
                  {item.titleEn}
                </h4>
                <b className="font-[900] text-[20px] leading-[30px] text-[#2A2A2A]">
                  $30.00
                </b>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
