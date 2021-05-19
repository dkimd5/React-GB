import React, { useState, useCallback } from "react";
import { ChatList } from "./ChatList/ChatList";
import { MessageField } from "./MessageField/MessageField"
import { ChatField } from "./ChatField/ChatField";
import "./messenger.scss";
import { useParams } from "react-router-dom";

export const Messenger = () => {

   const { chatId } = useParams();

   return (
      <div className="messenger">
         <ChatList />
         <div className="chat-msg-wrp">
            <ChatField chatId={ chatId } />
            <MessageField />
         </div>
      </div>
   )
}
