import React, { useState, useEffect } from "react";
import instance from "../api/Axios";
import "./Cards.css";
const Cards = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);
  useEffect(() => {
    instance()
      .get("/category")
      .then((response) => setCards(response.data))
      .catch((error) => console.log(error));
  }, []);

  const limitedCards = cards.slice(1, 5);
  return (
    <div className="container flex items-center justify-between">
      {limitedCards.length > 0 &&
        limitedCards.map((card) => (
          <div key={card.id} className="cards mt-[20px] bg-[#F5F5F5] ">
            <img className="fruits-image" src={card.image} alt="fruits" />
            <h3 className="fruits-title bg-white font-[900] text-[20px] leading-[50px]">
              {card.titleUz}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default Cards;
