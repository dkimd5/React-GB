import React, { useEffect, useState, useCallback } from "react";
import { Header } from "./Header/Header";
import { Messenger } from "./ChatsWindow/Messenger";
import "./reset.css";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default function App() {



  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/:chatId?" exact>
            <Messenger />
          </Route>
          <Route path="/secondheader" exact>
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}