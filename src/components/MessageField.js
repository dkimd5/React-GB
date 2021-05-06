import React, { useState } from "react";
import Message from "./Message";

export default function MessageField(props) {

   const [message, setMessage] = useState(
      [
         { noName: "First one" },
         { noName2: "Second one" }
      ]
   )

   const messageElements = message.map((msg, index) => {
      for (let key in msg) {
         return <Message key={ index } author={ key } text={ msg[key] } />
      }
   })

   return (
      <>
         <form>
            <div>
               <label>Username: </label>
               <input />
            </div>
            <div>
               <label>Message: </label>
               <textarea></textarea>
            </div>
            <button>Send Message</button>
         </form>
         {messageElements }
      </>
   )
}