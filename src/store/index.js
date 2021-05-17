import { createStore } from "redux";
import { combRed } from "./reducers"

export const store = createStore(combRed);