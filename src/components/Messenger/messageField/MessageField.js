import React, { useEffect, useState} from "react";

import { TextField, Button, Icon, makeStyles } from '@material-ui/core';
import { AUTHORS } from "../../_utils/constants";

const useStyles = makeStyles(() => ({
   button: {
      padding: '16px',
   },
   textField: {
      marginRight: '10px',
      width: '89%',
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