import React, { useState } from "react";
import Message from "./Message";

export default function MessageField(props) {

   const [message, setMessage] = useState(
      [
         { noName: "First one" },
         { noName2: "Second one" }
      ]
   )



   const sendMessage = () => {
      const inputValue = document.getElementById("author").value;
      const textareaValue = document.getElementById("text").value;
      setMessage(prev => [...prev, { [inputValue]: textareaValue }])
   }


   // handleSubmit = event => {
   //    const inputValue = document.getElementById("author").value;
   //    const textareaValue = document.getElementById("text").value;
   //    setMessage(prev => [...prev, { inputValue: textareaValue }]);
   //    event.preventDefault();
   // }

   const messageElements = message.map((msg, index) => {
      for (let key in msg) {
         return <Message key={ index } author={ key } text={ msg[key] } />
      }
   })

   return (
      <>
         {/* <form onSubmit={ handleSubmit }> */ }
         <div>
            <label>Username: </label>
            <input id="author" type="text" />
         </div>
         <div>
            <label>Message: </label>
            <textarea id="text"></textarea>
         </div>
         <button type="submit" onClick={ sendMessage }>Send Message</button>
         {/* </form> */ }
         { messageElements }
      </>
   )
}