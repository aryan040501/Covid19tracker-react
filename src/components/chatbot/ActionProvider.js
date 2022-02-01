var count = 0;

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  yesHandlerOne = () => {
    const message = this.createChatBotMessage(
      "Oh No! Have you ever had Diabetes OR Hypertension OR Lung Disease OR Heart Disease?",
      {
        widget: "Optionstwo",
      }
    );
    this.setChatbotMessage(message);
    count += 2;
    console.log(count);
  };

  noHandlerOne = () => {
    const message = this.createChatBotMessage(
      "Phew! Have you ever had Diabetes OR Hypertension OR Lung Disease OR Heart Disease?",
      {
        widget: "Optionstwo",
      }
    );
    this.setChatbotMessage(message);
    console.log(count);
  };

  yesHandlerTwo = () => {
    const message = this.createChatBotMessage(
      "Oh No! Have you Travelled anywhere Internationally in the last 28-45 Days?",
      {
        widget: "Optionsthree",
      }
    );
    this.setChatbotMessage(message);
    count += 1;
    console.log(count);
  };

  noHandlerTwo = () => {
    const message = this.createChatBotMessage(
      "Phew! Have you Travelled anywhere Internationally in the last 28-45 Days?",
      {
        widget: "Optionsthree",
      }
    );
    this.setChatbotMessage(message);
    console.log(count);
  };

  yesHandlerThree = () => {
    const message = this.createChatBotMessage(
      "Oh No! Have you Come in contact with a COVID Positive Person?",
      {
        widget: "Optionsfour",
      }
    );
    this.setChatbotMessage(message);
    count += 2;
    console.log(count);
  };

  noHandlerThree = () => {
    const message = this.createChatBotMessage(
      "Phew! Have you Come in contact with a COVID Positive Person?",
      {
        widget: "Optionsfour",
      }
    );
    this.setChatbotMessage(message);
    console.log(count);
  };

  yesHandlerFour = () => {
    count += 2;
    console.log(count);
    if (count >= 2) {
      const message = this.createChatBotMessage(
        "You have high risk, We recommend being quarantined and consulting a doctor"
      );
      this.setChatbotMessage(message);
    } else if (count === 1) {
      const message = this.createChatBotMessage(
        "You have a slight risk, We recommend you to stay home and eat Healthy!"
      );
      this.setChatbotMessage(message);
    } else {
      const message = this.createChatBotMessage(
        "You have no risk, We still recommend you to stay home and eat Healthy!"
      );
      this.setChatbotMessage(message);
    }
  };

  noHandlerFour = () => {
    console.log(count);
    if (count >= 2) {
      const message = this.createChatBotMessage(
        "You have risk of COVID-19, We recommend you to get a checkup"
      );
      this.setChatbotMessage(message);
    } else if (count === 1) {
      const message = this.createChatBotMessage(
        "You have a slight risk, We recommend you to stay home and eat Healthy!"
      );
      this.setChatbotMessage(message);
    } else {
      const message = this.createChatBotMessage(
        "You have no risk, We still recommend you to stay home and eat Healthy!"
      );
      this.setChatbotMessage(message);
    }
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
