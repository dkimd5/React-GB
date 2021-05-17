import { CHANGE_COUNTRY } from "./actions";

const initialState = {
   country: "Japan",
};

export const profileReducer = (state = initialState, action) => {
   console.log("state: ", state, action);
   switch (action.type) {
      case CHANGE_COUNTRY: {
         return {
            ...state,
            country: "Korea",
         }
      }
      default: return state;
   }
}