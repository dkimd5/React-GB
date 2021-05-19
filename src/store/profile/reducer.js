import { CHANGE_COUNTRY } from "./actions";

const initialState = {
   country: "Japan",
};

export const profileReducer = (state = initialState, action) => {
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