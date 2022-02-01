import { createChatBotMessage } from "react-chatbot-kit";
import Optionsone from "./Optionsone";
import Optionstwo from "./Optionstwo";
import Optionsthree from "./Optionsthree";
import Optionsfour from "./Optionsfour";

const config = {
  botName: "CovidAnalyser",
  initialMessages: [
    createChatBotMessage(`Hi, My name is JOIE.`),
    createChatBotMessage(`Hi, Are you feeling any Discomfort?`, {
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
    },
  ],
};

export default config;
