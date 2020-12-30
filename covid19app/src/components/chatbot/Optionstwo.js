import React from "react";


import "./Options.css";

const Optionstwo = (props) => {
  const optionstwo = [
    {
      text: "Yes",
      handler: props.actionProvider.yesHandlerTwo,
      id: 1,
    },
    { text: "No", handler: props.actionProvider.noHandlerTwo, id: 2 },

  ];

  const buttonsMarkup = optionstwo.map((optionstwo) => (
    <button key={optionstwo.id} onClick={optionstwo.handler} className="option-button">
      {optionstwo.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Optionstwo;