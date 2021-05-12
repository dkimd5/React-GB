import React, { useEffect, useState, useCallback } from "react";
import { Header } from "./Header/Header";
import { Messenger } from "./ChatsWindow/Messenger";
import "./reset.css";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Profile } from "./Profile/Profile";


export default function App() {
  //TODO: redirection


  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Messenger />
          </Route>
          <Route path="/chat/:chatId?" exact>
            <Messenger />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}