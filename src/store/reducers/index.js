import { combineReducers } from "redux";
import { profileReducer } from "../profile/reducer";
import { messagesReducer } from "../messages/reducer";
import { chatsReducer } from "../chats/reducer";


export const combRed = combineReducers({
   profileReducer,
   messagesReducer,
   chatsReducer,
});