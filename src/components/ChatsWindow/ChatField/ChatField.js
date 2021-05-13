import React, { useEffect } from "react";
import { AUTHORS } from "../../_utils/constants";
import "./chatField.scss";


export const ChatField = ({ messages, handleAddMessage }) => {

   useEffect(() => {
      if (!messages.length) { return }

      const lastMsg = messages[messages.length - 1];
      if (lastMsg.author === AUTHORS.HUMAN) {
         handleAddMessage({ author: AUTHORS.BOT, text: `Hi, ${lastMsg.author}` })
      }
   }, [messages]);

   const messageRender = messages.map((message, index) => (
      <li className={ `item-list ${message.author === AUTHORS.HUMAN ? "human" : "bot"}` } key={ index }>{ message.author }: { message.text }</li>
   ));

   return (
      <>
         <ul className="messages-list">
            { messageRender }
         </ul>
      </>
   )
}