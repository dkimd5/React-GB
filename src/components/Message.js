import React from "react";

const Message = (props) => {
   return (
      <>
      <span>{ props.author }</span>
      <p>{ props.text }</p>
      </>
   )
}

export default Message;