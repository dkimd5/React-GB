import { SEND_MESSAGE } from "./actions";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { AUTHORS } from "../../components/_utils/constants"

const initialState = {
   chat1: [
      { author: AUTHORS.HUMAN, text: "Where am I" },
      { author: AUTHORS.BOT, text: "Hi, human" }
   ],
   chat2: [
      { author: AUTHORS.HUMAN, text: "Peace" },
      { author: AUTHORS.BOT, text: "No peace here" }
   ],
   chat3: [
      { author: AUTHORS.HUMAN, text: "Hey" },
      { author: AUTHORS.ALEX, text: "Where have you been?" }
   ]
};

export const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         return {
            ...state,
            [action.payload.chatId]:
               [...state[action.payload.chatId], action.payload.message],
         }
      }
      case ADD_CHAT: {
         return {
            ...state,
            [action.payload.id]: [],
         };
      }
      default:
         return state;
   }
}