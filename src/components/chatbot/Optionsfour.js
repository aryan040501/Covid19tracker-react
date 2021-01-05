import React from "react";


import "./Options.css";

const Optionsfour = (props) => {
  const optionsfour = [
    {
      text: "Yes",
      handler: props.actionProvider.yesHandlerFour,
      id: 1,
    },
    { text: "No", handler: props.actionProvider.noHandlerFour, id: 2 },

  ];

  const buttonsMarkup = optionsfour.map((optionsfour) => (
    <button key={optionsfour.id} onClick={optionsfour.handler} className="option-button">
      {optionsfour.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Optionsfour;