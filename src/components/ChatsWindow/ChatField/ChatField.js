import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { AUTHORS } from "../../_utils/constants";
import "./chatField.scss";


export const ChatField = ({ chatId }) => {

   const messages = useSelector(state => state.messages)

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