import React, { useEffect, useState, useCallback } from "react";
import { Header } from "./header/Header";
import {ChatsWindow} from "./ChatsWindow/ChatsWindow";


export default function App() {

  

  return (
    <div>
      <Header />
      <ChatsWindow />
    </div>
  )
}