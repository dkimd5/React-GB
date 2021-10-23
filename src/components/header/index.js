import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <div className="header">
         <Link to="/" className="header-text">
            <h1>React Messenger</h1>
         </Link>
      </div>
   )
}