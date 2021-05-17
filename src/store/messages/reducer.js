import { SEND_MESSAGE } from "./actions";
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
   console.log(state, action);
   switch (action.type) {
      case SEND_MESSAGE: {
         return [
            ...state,

         ]
      }
      default:
         return state;
   }
}