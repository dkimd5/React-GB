import React, { useEffect, useState, useCallback } from "react";
import { Header } from "./Header/Header";
import { Messenger } from "./ChatsWindow/Messenger";
import "./reset.css";
import "./app.scss";


export default function App() {



  return (
    <div className="container">
      <Header />
      <Messenger />
    </div>
  )
}