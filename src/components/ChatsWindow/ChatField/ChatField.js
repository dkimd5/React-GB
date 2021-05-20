import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { sendMessage } from "../../../store/messages/actions";
import { AUTHORS } from "../../_utils/constants";
import "./chatField.scss";


export const ChatField = ({ chatId }) => {

   const messages = useSelector(state => state.messages)
   const dispatch = useDispatch();

   useEffect(() => {
      if (!messages[chatId]?.length) { return }

      const lastMsg = messages[chatId][messages[chatId].length - 1];
      if (lastMsg.author === AUTHORS.HUMAN) {
         dispatch(sendMessage({ author: AUTHORS.BOT, text: `Hi, ${lastMsg.author}` }, chatId))
      }
   }, [messages]);

   // if (!chatId || !messages[chatId]) {
   //    return <Redirect to="/" />;
   // }

   const messageRender = messages[chatId]?.map((message, index) => (
      <li className={ `item-list ${message.author === AUTHORS.HUMAN ? "human" : "bot"}` } key={ index }>{ message.author }: { message.text }</li>
   ));

   return (
      <>
         <ul className="messages-list">
            { chatId == undefined ? <h1>Choose chat</h1> : messageRender }
         </ul>
      </>
   )
}