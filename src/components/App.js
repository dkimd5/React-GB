import React, { useEffect, useState, useCallback } from "react";
import Message from "./Message";
import ArrMessages from "./ArrMessages";

export default function App() {
   return (<div>
            <Message text="From the Past" />
            <ArrMessages/>
          </div>)
}