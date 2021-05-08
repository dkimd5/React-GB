import React from "react";

export const Message = (props) => {
   return (
      <>
      <span>{ props.author }</span>
      <p>{ props.text }</p>
      </>
   )
}