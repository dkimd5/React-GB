import React, { useEffect, useState, useRef } from "react";
import { AUTHORS } from "../../_utils/constants";

export const MessageField = ({ onAddMessage }) => {

   const [value, setValue] = useState('');
   const input = useRef();

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      onAddMessage({ author: AUTHORS.HUMAN, text: value });
      setValue('');
   }

   useEffect(() => {
      input.current.focus();
   }, [])

   return (
      <form onSubmit={ handleSubmit } >
         <input type="text" value={ value } ref={ input } onChange={ handleChange } />
         <input type="submit" />
      </form>
   )
}