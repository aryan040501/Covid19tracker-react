var count = 0;

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  yesHandlerOne = () => {
    const message = this.createChatBotMessage(
      "Thats Amazing! Have you listened to Unforgettable by French Montana",
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
      "Thats Good! Do you like to Travel?",
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
      "Travelling really helps a lot to refresh the mood. Do take me to the next trip too. Will you?",
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
        "Thanks a lot, Do let me know if you need to talk about anything.. Have a good day"
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
