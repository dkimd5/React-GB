import React, { useCallback } from "react";
import { ChatList } from "./chatList";
import { MessageField } from "./messageField"
import { ChatField } from "./chatField";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { sendMessageWithThunk } from "../../store/messages/actions"
import { useDispatch } from "react-redux";

export const Messenger = () => {

   const { chatId } = useParams();
   const dispatch = useDispatch();

   const handleAddMessage = useCallback(
      (newMessage) => {
         dispatch(sendMessageWithThunk(newMessage, chatId));
      },
      [chatId, dispatch]
   );

   return (
      <div className="messenger">
         <ChatList chatId={ chatId } />
         <div className="chat-msg-wrp">
            <ChatField chatId={ chatId } />
            { chatId != undefined && <MessageField onAddMessage={ handleAddMessage } /> }
         </div>
      </div>
   )
}
