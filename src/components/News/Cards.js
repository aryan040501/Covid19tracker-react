import React from "react";
import "./Cards.css";
import CardItem from "./CardsItem";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these COVID-19 NEWS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="UK govt approves Oxford-AstraZeneca Covid-19 vaccine"
              label="UK News"
              path=""
            />
            <CardItem
              src={image2}
              text="Indian govt extends ban on UK-India flights till Jan 7"
              label="Travel News"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="India reports 14 more cases of new UK coronavirus strain"
              label="India News"
              path=""
            />
            <CardItem
              src={image4}
              text="21,822 new cases in India"
              label="India News"
              path=""
            />
            <CardItem
              src={image5}
              text="299 deaths in India"
              label="India News"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
