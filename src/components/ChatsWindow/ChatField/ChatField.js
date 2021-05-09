import React, { useEffect } from "react";
import { AUTHORS } from "../../_utils/constants";


export const ChatField = ({ messages }) => {

   useEffect(() => {
      if (!messages.length) { return }

      const lastMsg = messages[messages.length - 1];
      if (lastMsg.author === AUTHORS.HUMAN) {
         handleAddMessage({ author: AUTHORS.BOT, text: `Hi, ${lastMsg.author}` })
      }
   }, [messages]);

   const messageRender = messages.map((message, index) => (
      <li key={ index }>{ message.author }: { message.text }</li>
   ));

   return (
      <>
         <ul>
            { messageRender }
         </ul>
      </>
   )
}