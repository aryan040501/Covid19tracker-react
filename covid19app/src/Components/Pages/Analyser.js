import React from 'react'
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/chatbotConfig";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

export default function Analyser() {
    return (
        <div>
           <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}/>
        </div>
    )
}
