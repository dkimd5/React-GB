import React, { useState, useCallback } from "react";
import { ChatList } from "./chatList/ChatList";
import { MessageField } from "./messageField/MessageField"
import { ChatField } from "./ChatField/ChatField";
import { AUTHORS } from "../_utils/constants";

const initialMessages = [
   { author: AUTHORS.HUMAN, text: "Peace" },
   { author: AUTHORS.BOT, text: "Hi, human" }
];

export const ChatsWindow = () => {

   const [messages, setMessages] = useState(initialMessages);

   const handleAddMessage = useCallback(newMessage => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
   }, [])

   return (
      <div>
         <ChatList />
         <div>
            <ChatField messages={ messages } />
            <MessageField onAddMessage={ handleAddMessage } />
         </div>
      </div>
   )
}
