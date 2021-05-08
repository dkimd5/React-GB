import React, { useEffect, useState, useCallback } from "react";
import { MessageField } from "./MessageField";
import { AUTHORS } from "./utils/constants";

const initialMessages = [
  { author: AUTHORS.HUMAN, text: "Peace" },
  { author: AUTHORS.BOT, text: "Hi, human" }
];

export default function App() {

  const [messages, setMessages] = useState(initialMessages);

  const handleAddMessage = useCallback(newMessage => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  }, [])

  useEffect(() => {
    if (!messages.length) { return }

    const lastMsg = messages[messages.length - 1];
    if (lastMsg.author === AUTHORS.HUMAN) {
      handleAddMessage({ author: AUTHORS.BOT, text: `Hi, ${lastMsg.author}` })
    }
  }, [messages]);

  return (
    <div>
      <ul>
        { messages.map((message, index) => (
          <li key={ index }>{ message.author }: { message.text }</li>
        )) }
      </ul>
      <MessageField onAddMessage={ handleAddMessage } />
    </div>
  )
}