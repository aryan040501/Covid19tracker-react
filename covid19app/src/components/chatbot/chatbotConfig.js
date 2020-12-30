import { createChatBotMessage } from "react-chatbot-kit";
import Optionsone from "./Optionsone";
import Optionstwo from "./Optionstwo";
import Optionsthree from "./Optionsthree";
import Optionsfour from "./Optionsfour";

const config = {
  botName: "CovidAnalyser",
  initialMessages: [
    createChatBotMessage(`Hi, I will help you analyse if you might have COVID-9.`),
    createChatBotMessage(`Hi, Do you have Fever OR Difficulty in Breathing OR Loss in Sense of Smell and Taste?`,{
    widget: "Optionsone",
  }),
],
  widgets: [
    {
      widgetName: "Optionsone",
      widgetFunc: (props) => <Optionsone {...props} />,
    },
    {
      widgetName: "Optionstwo",
      widgetFunc: (props) => <Optionstwo {...props} />,
    },
    {
      widgetName: "Optionsthree",
      widgetFunc: (props) => <Optionsthree {...props} />,
    },
    {
      widgetName: "Optionsfour",
      widgetFunc: (props) => <Optionsfour {...props} />,
    }
  ]
}

export default config