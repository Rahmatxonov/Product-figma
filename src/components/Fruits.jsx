import React from "react";
import "./Fruits.css";

const Fruits = () => {
  return (
    <section>
      <div className="fruits container flex items-center justify-between space-x-5">
        <div className="box relative">
          <div className="absolute right-[25px] top-[30%] text-white">
            <h3 className="font-[900] capitalize text-[28px] leading-[34px]">
              summer fruits
            </h3>
            <p className="font-[400] text-[20px] leading-[34px] capitalize pb-[30px] pt-[10px]">
              100% all natural fruit juise
            </p>
            <button className="fruits-btn bg-[#7FAD39] shop-btn text-white font-[700] tetx-[16px] leading-[20px]">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="box2 relative">
          <div className="absolute right-[25px] top-[30%] text-white">
            <h3 className="font-[900] capitalize text-[28px] leading-[34px]">
              dried & drink fruits
            </h3>
            <p className="font-[400] text-[20px] leading-[34px] capitalize pb-[30px] pt-[10px]">
              100% all natural fruit juice
            </p>
            <button className="fruits-btn bg-[#7FAD39] shop-btn text-white font-[700] tetx-[16px] leading-[20px]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fruits;
