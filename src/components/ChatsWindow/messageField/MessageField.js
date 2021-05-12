import React, { useEffect, useState, useRef } from "react";
import { AUTHORS } from "../../_utils/constants";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

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
   // const input = useRef();

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      onAddMessage({ author: AUTHORS.HUMAN, text: value });
      setValue('');
   }

   // useEffect(() => {
   //    input.current.focus();
   // }, [])

   return (
      <form onSubmit={ handleSubmit }>
         <TextField
            id="outlined-textarea"
            label="Your message"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            value={ value }
            // inputRef={ input }
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
         {/* <input type="text" value={ value } ref={ input } onChange={ handleChange } />
         < input type="submit" /> */}
      </form>
   )
}