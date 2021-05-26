import { REQUEST_STATUS } from "../../components/_utils/constants";
import { ART_FAILURE, ART_REQUEST, ART_SUCCESS } from "./actions";

const initialState = {
   art: {},
   request: {
      status: REQUEST_STATUS.IDLE,
      error: '',
   }
};

export const artReducer = (state = initialState, action) => {
   switch (action.type) {
      case ART_REQUEST: {
         return {
            ...state,
            request: {
               status: REQUEST_STATUS.PENDING,
               error: "",
            }
         };
      }
      case ART_FAILURE: {
         return {
            ...state,
            request: {
               status: REQUEST_STATUS.FAILURE,
               error: action.error,
            }
         }
      };
      case ART_SUCCESS: {
         return {
            ...state,
            art: action.art,
            request: {
               status: REQUEST_STATUS.SUCCESS,
               error: "",
            }
         }
      };
      default:
         return state;
   }
}