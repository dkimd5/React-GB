import React, { useState, useCallback } from "react";
import { ChatList } from "./ChatList/ChatList";
import { MessageField } from "./MessageField/MessageField"
import { ChatField } from "./ChatField/ChatField";
import { AUTHORS } from "../_utils/constants";
import "./messenger.scss";

const initialMessages = [
   { author: AUTHORS.HUMAN, text: "Peace" },
   { author: AUTHORS.BOT, text: "Hi, human" }
];

export const Messenger = () => {

   const [messages, setMessages] = useState(initialMessages);

   const handleAddMessage = useCallback(newMessage => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
   }, [])

   return (
      <div className="messenger">
         <ChatList />
         <div className="chat-msg-wrp">
            <ChatField messages={ messages } handleAddMessage={ handleAddMessage } />
            <MessageField onAddMessage={ handleAddMessage } />
         </div>
      </div>
   )
}
