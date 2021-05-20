export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE';

export const sendMessage = (newMessage, chatId) => ({
   type: SEND_MESSAGE,
   payload: {
      message: newMessage,
      chatId,
   }
})