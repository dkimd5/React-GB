import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

// if ('serviceWorker' in navigator) {
//    navigator.serviceWorker.register('/src/sw.js').catch((err) => console.log(err));
//    console.log("SW register success");
// }

if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
         // регистрация сработала
         console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch((error) => {
         // регистрация прошла неудачно
         console.log('Registration failed with ' + error);
      });
}

ReactDOM.render(
   <Provider store={ store }>
      <PersistGate persistor={ persistor } loading={ null }>
         <App />
      </PersistGate>
   </Provider >,
   document.getElementById("app"));