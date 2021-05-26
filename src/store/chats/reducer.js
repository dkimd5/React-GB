import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { SEND_MESSAGE } from "../messages/actions";

const initialState = {
   chatList: [
      { name: 'Human', avatar: 'https://material-ui.com/static/images/avatar/1.jpg', id: 'chat1' },
      { name: 'Bot', avatar: 'https://material-ui.com/static/images/avatar/2.jpg', id: 'chat2' },
      { name: 'Alex', avatar: 'https://material-ui.com/static/images/avatar/3.jpg', id: 'chat3' },
   ],
   newMessageChatId: '',
}

export const chatsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CHAT: {
         return {
            ...state,
            chatList: [...state.chatList, action.payload]
         };
      };
      case SEND_MESSAGE: {
         return {
            ...state,
            newMessageChatId: action.payload.chatId,
         }
      };
      case DELETE_CHAT: {
         const chatIndex = [...state.chatList].findIndex(chat => chat.id === action.payload);

         const newChatList = [...state.chatList];
         newChatList.splice(chatIndex, 1);

         return {
            ...state,
            chatList: newChatList,
         }
      }
      default:
         return state;
   }
}