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

window.addEventListener('load', async () => {
   if ('serviceWorker' in navigator) {
     try {
       const reg = await navigator.serviceWorker.register('/src/sw.js')
       console.log('Service worker register success', reg)
     } catch (e) {
       console.log('Service worker register fail')
     }
   }
 })

ReactDOM.render(
   <Provider store={ store }>
      <PersistGate persistor={ persistor } loading={ null }>
         <App />
      </PersistGate>
   </Provider >,
   document.getElementById("app"));