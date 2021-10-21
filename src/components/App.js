import React from "react";
import { Header } from "./header";
import { Messenger } from "./messenger";
import "./reset.css";
import "./styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Messenger />
          </Route>
          <Route path="/chat/:chatId">
            <Messenger />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}