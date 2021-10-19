import React, { useEffect, useState } from 'react';
import { makeStyles, List, ListItem, ListItemText, Avatar, ListItemAvatar, Divider, TextField, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import './chatList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../../store/chats/actions';

const useStyles = makeStyles({
   root: {
      width: '30%',
      height: '80vh',
      padding: 0,
      borderRight: '1px solid #f92056',
   },
   icon: {
      margin: '0 10px 0 30px',
   },
   newMsg: {
      backgroundColor: 'aqua',
   },
   addChatField: {
      width: '50%',
   },
   addChatBtn: {
      marginLeft: '10px',
      background: '#FF527C',
   }
});

export const ChatList = ({ chatId }) => {
   const classes = useStyles();

   const [value, setValue] = useState("");

   const chats = useSelector(state => state.chats.chatList);
   const newMessageChatId = useSelector(state => state.chats.newMessageChatId);
   const dispatch = useDispatch();

   useEffect(() => {
      
   }, [chatId])

   const handleChange = (e) => {
      setValue(e.target.value);
   }

   const handleAddChat = () => {
      if (value) {
         dispatch(addChat({ name: value, id: Date.now() }));
         setValue("");
      }
   };

   return (
      <>
         <List className={ classes.root }>
            { chats.map((chat) => (
               < Link to={ `/chat/${chat.id}` } key={ chat.id } className='chatlist-link link'>
                  <ListItem button className={ `${newMessageChatId === chat.id ? classes.newMsg : ""}` }>
                     <ListItemAvatar>
                        <Avatar alt="bot" src={ chat.avatar } />
                     </ListItemAvatar>
                     <ListItemText primary={ chat.name } />
                     <IconButton aria-label="delete" onClick={ () => { dispatch(deleteChat(chat.id)) } }>
                        <DeleteIcon />
                     </IconButton>
                  </ListItem>
                  <Divider variant="middle" component="li" />
               </Link>
            ))
            }
            <div className="addchat-wrp">
               <TextField
                  placeholder="Chat name"
                  color="secondary"
                  className={ classes.addChatField }
                  value={ value }
                  onChange={ handleChange } />
               <Button
                  className={ classes.addChatBtn }
                  variant="contained"
                  color="primary"
                  onClick={ handleAddChat }
               >
                  Add Chat
               </Button>
            </div>
         </List >

      </>
   );
}