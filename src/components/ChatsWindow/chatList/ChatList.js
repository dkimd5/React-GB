import React, { useState } from 'react';
import { makeStyles, List, ListItem, ListItemText, Avatar, ListItemAvatar, Divider, TextField, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import './chatList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../../store/chats/actions';

const useStyles = makeStyles({
   root: {
      width: '20%',
      height: '80vh',
      padding: 0,
      borderRight: '1px solid #f92056',
   },
   icon: {
      margin: '0 10px 0 30px',
   },
   newMsg: {
      backgroundColor: 'aqua',
   }
});

export const ChatList = () => {
   const classes = useStyles();

   const [value, setValue] = useState("");

   const chats = useSelector(state => state.chats.chatList);
   const newMessageChatId = useSelector(state => state.chats.newMessageChatId);
   console.log(newMessageChatId);
   const dispatch = useDispatch();

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   const handleAddChat = () => {
      if (value) {
         dispatch(addChat({ name: value, id: Date.now() }));
         setValue("");
      }
   };

   // ${newMessageChatId === chat.id ? "newMsg" : ""}

   return (
      <>
         <List className={ classes.root }>
            { chats.map((chat) => (
               < Link to={ `/chat/${chat.id}` } key={ chat.id } className='chatlist-link link'>
                  <ListItem button className={ `${newMessageChatId === chat.id ? classes.newMsg : ""}` }>
                     <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={ chat.avatar } />
                     </ListItemAvatar>
                     <ListItemText primary={ chat.name } />
                  </ListItem>
                  <Divider variant="middle" component="li" />
               </Link>
            ))
            }
            <TextField value={ value } onChange={ handleChange } />
            <Button
               variant="contained"
               color="primary"
               onClick={ handleAddChat }
            >
               Add Chat
               </Button>
         </List >

      </>
   );
}