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
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5em",
          margin: "2.5vh",
          color: "white",
          paddingBottom: "25px",
        }}
      >
        Check Out These COVID-19 News!
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="UK govt approves Oxford-AstraZeneca Covid-19 vaccine"
              label="UK News"
              path="https://www.moneycontrol.com/news/trends/health-trends/uk-approves-oxford-astrazeneca-covid-19-vaccine-6285481.html"
            />
            <CardItem
              src={image2}
              text="Indian govt extends ban on UK-India flights till Jan 7"
              label="Travel News"
              path="https://www.livemint.com/news/india/india-extends-ban-on-flights-from-uk-till-7-january-11609306413497.html"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="India reports 14 more cases of new UK coronavirus strain"
              label="India News"
              path="https://science.thewire.in/health/india-reports-6-cases-of-uk-coronavirus-strain/"
            />
            <CardItem
              src={image4}
              text="21,822 new cases in India"
              label="India News"
              path="https://www.netindian.in/news/national/india-reports-299-covid-19-deaths-21822-new-cases-in-past-24-hours"
            />
            <CardItem
              src={image5}
              text="299 deaths in India"
              label="India News"
              path="https://www.dnaindia.com/india/report-india-reports-21821-covid19-cases-299-deaths-in-24-hours-2865235"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
