import React, { useEffect, useState, useRef } from "react";

import { TextField, Button, Icon, makeStyles } from '@material-ui/core';

import { useDispatch } from "react-redux";
import { sendMessage } from "../../../store/messages/actions"

const useStyles = makeStyles(() => ({
   button: {
      padding: '16px',
   },
   textField: {
      marginRight: '10px',
      width: '89%',
   },
}));

export const MessageField = () => {

   const classes = useStyles();

   const [value, setValue] = useState('');
   const dispatch = useDispatch();

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(sendMessage(value));
      setValue('');
   }

   return (
      <form onSubmit={ handleSubmit }>
         <TextField
            id="outlined-textarea"
            label="Your message"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            value={ value }
            autoFocus={ true }
            onChange={ handleChange }
            className={ classes.textField }
         />
         <Button
            type="submit"
            variant="contained"
            color="primary"
            className={ classes.button }
            endIcon={ <Icon>send</Icon> }
         >
            Send
      </Button>
      </form>
   )
}