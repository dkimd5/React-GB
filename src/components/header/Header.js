import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <div className="header">
         <Link to="/profile" className="header-link link">Profile</Link>
         <Link to="/" className="header-text link">
            <h1>React Messenger</h1>
         </Link>
      </div>
   )
}