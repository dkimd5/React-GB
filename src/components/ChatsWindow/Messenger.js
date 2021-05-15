import React, { useState, useCallback } from "react";
import { ChatList } from "./ChatList/ChatList";
import { MessageField } from "./MessageField/MessageField"
import { ChatField } from "./ChatField/ChatField";
import { AUTHORS } from "../_utils/constants";
import "./messenger.scss";
import { Redirect, useParams } from "react-router-dom";

const initialMessages = {
   chat1: [
      { author: AUTHORS.HUMAN, text: "Where am I" },
      { author: AUTHORS.BOT, text: "Hi, human" }
   ],
   chat2: [
      { author: AUTHORS.HUMAN, text: "Peace" },
      { author: AUTHORS.BOT, text: "No peace here" }
   ],
   chat3: [
      { author: AUTHORS.HUMAN, text: "Hey" },
      { author: AUTHORS.ALEX, text: "Where have you been?" }
   ]
};

const chats = [
   { name: 'Human', avatar: 'https://material-ui.com/static/images/avatar/1.jpg', id: 'chat1' },
   { name: 'Bot', avatar: 'https://material-ui.com/static/images/avatar/2.jpg', id: 'chat2' },
   { name: 'Alex', avatar: 'https://material-ui.com/static/images/avatar/3.jpg', id: 'chat3' },
]

export const Messenger = () => {

   const [messages, setMessages] = useState(initialMessages);

   const { chatId } = useParams();

   const handleAddMessage = useCallback(newMessage => {
      setMessages(prevMessages => ({ ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage] }));
   }, [chatId])

   // if (!chatId || !messages[chatId]) {
   //    return <Redirect to="/" />
   // }

   return (
      <div className="messenger">
         <ChatList chats={ chats } />
         <div className="chat-msg-wrp">
            <ChatField messages={ messages } chatId={ chatId } handleAddMessage={ handleAddMessage } />
            <MessageField onAddMessage={ handleAddMessage } />
         </div>
      </div>
   )
}
