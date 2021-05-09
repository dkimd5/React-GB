import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
   },
}));

export const ChatList = (props) => {
   const classes = useStyles();
   const [selectedIndex, setSelectedIndex] = React.useState(1);

   const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
   };

   return (
      <div className={ classes.root }>
         <List component="nav" aria-label="secondary mailbox folder">
            <ListItem
               button
               selected={ selectedIndex === 2 }
               onClick={ (event) => handleListItemClick(event, 2) }
            >
               <ListItemText primary="Human1" />
            </ListItem>
            <Divider />
            <ListItem
               button
               selected={ selectedIndex === 3 }
               onClick={ (event) => handleListItemClick(event, 3) }
            >
               <ListItemText primary="Bot1" />
            </ListItem>
         </List>
      </div>
   );
}