import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        {/* <Link className="cards__item__link" to={props.path}> */}
        <a
          className="cards__item__link"
          href={props.path}
          target="_blank"
          rel="noreferrer"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
