import { combineReducers } from "redux";
import { profileReducer } from "../profile/reducer";
import { messagesReducer } from "../messages/reducer";
import { chatsReducer } from "../chats/reducer";
import { artReducer } from "../arts/reducer";


export const combRed = combineReducers({
   profile: profileReducer,
   messages: messagesReducer,
   chats: chatsReducer,
   art: artReducer,
});