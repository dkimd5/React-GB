import React, { useState } from "react";
import { TextField, Button, Icon, makeStyles } from '@material-ui/core';
import { AUTHORS } from "../../_utils/constants";

const useStyles = makeStyles(() => ({
   button: {
      padding: '15.68px',
      background: '#FF527C',
   },
   textField: {
      marginRight: '10px',
      width: '85%',
   },
}));

export const MessageField = ({ onAddMessage }) => {

   const classes = useStyles();

   const [value, setValue] = useState('');

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      onAddMessage({ author: AUTHORS.HUMAN, text: value });
      setValue('');
   }

   return (
      <form onSubmit={ handleSubmit }>
         <TextField
            id="outlined-textarea"
            label="Your message"
            placeholder="Text your message here..."
            multiline
            variant="outlined"
            color="secondary"
            fullWidth="false"
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