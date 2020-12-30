import React from "react";


import "./Options.css";

const Optionsthree = (props) => {
  const optionsthree = [
    {
      text: "Yes",
      handler: props.actionProvider.yesHandlerThree,
      id: 1,
    },
    { text: "No", handler: props.actionProvider.noHandlerThree, id: 2 },

  ];

  const buttonsMarkup = optionsthree.map((optionsthree) => (
    <button key={optionsthree.id} onClick={optionsthree.handler} className="option-button">
      {optionsthree.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Optionsthree;