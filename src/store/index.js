import { createStore } from "redux";
import { combRed } from "./reducers"

export const store = createStore(combRed, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());