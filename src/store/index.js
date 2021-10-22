import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combRed } from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import "regenerator-runtime/runtime";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
   key: 'gbMessenger',
   storage,
}

const persistedReducer = persistReducer(persistConfig, combRed)


export const store = createStore(
   persistedReducer,
   applyMiddleware(thunk)
);

export const persistor = persistStore(store)