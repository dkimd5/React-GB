export const ADD_CHAT = 'CHATLIST::ADD_CHAT';
export const DELETE_CHAT = 'CHATLIST::DELETE_CHAT';

export const addChat = title => ({
   type: ADD_CHAT,
   title,
});

export const deleteChat = {
   type: DELETE_CHAT,
}