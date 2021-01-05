import React from 'react'
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/chatbotConfig";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "../chatbot/chatbot.css"

export default function Analyser() {
    return (
        <div>
           <Chatbot
                className="chatbot"
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}/>
        </div>
    )
}
