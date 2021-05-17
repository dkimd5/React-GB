export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE';

export const sendMessage = (message) => ({
   type: SEND_MESSAGE,
   message,
})