import { AUTHORS } from "../../components/_utils/constants";

export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE';

export const sendMessage = (newMessage, chatId) => ({
   type: SEND_MESSAGE,
   payload: {
      message: newMessage,
      chatId,
   }
})

export const sendMessageWithThunk = (newMessage, chatId) => (dispatch, setState) => {
   dispatch(sendMessage(newMessage, chatId));

   if (newMessage.author !== AUTHORS.BOT) {
      setTimeout(() => {
         dispatch(sendMessage({ author: AUTHORS.BOT, text: "Beep boop, robot sounds" }, chatId));
      }, 1000)
   }
}