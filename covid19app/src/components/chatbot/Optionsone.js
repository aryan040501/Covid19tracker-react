import React from "react";


import "./Options.css";

const Optionsone = (props) => {
  const optionsone = [
    {
      text: "Yes",
      handler: props.actionProvider.yesHandlerOne,
      id: 1,
    },
    { text: "No", handler: props.actionProvider.noHandlerOne, id: 2 },

  ];

  const buttonsMarkup = optionsone.map((optionsone) => (
    <button key={optionsone.id} onClick={optionsone.handler} className="option-button">
      {optionsone.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Optionsone;