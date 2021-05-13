import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';

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

export const ChatList = (props) => {
   const classes = useStyles();

   return (
      <List className={ classes.root }>
         <ListItem
            button
         >
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Human" />
         </ListItem>
         <Divider variant="middle" component="li" />
         <ListItem
            button
         >
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Bot" />
         </ListItem>
         <Divider variant="middle" component="li" />
         <ListItem
            button
         >
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Alex" />
         </ListItem>
         <Divider variant="middle" component="li" />
      </List>
   );
}