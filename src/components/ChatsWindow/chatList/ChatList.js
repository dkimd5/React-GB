import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import './chatList.scss';
import { useSelector } from 'react-redux';

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
});

export const ChatList = ({ chats }) => {
   const classes = useStyles();

   const chats = useSelector((state) => state.)

   return (
      <List className={ classes.root }>
         {chats.map((chat) => (

            < Link to={ `/chat/${chat.id}` } key={ chat.id } className='chatlist-link link'>
               <ListItem button >
                  <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={ chat.avatar } />
                  </ListItemAvatar>
                  <ListItemText primary={ chat.name } />
               </ListItem>
               <Divider variant="middle" component="li" />
            </Link>
         ))
         }
      </List >
   );
}