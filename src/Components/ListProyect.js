import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fifa 19" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Star Wars" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Secret Game" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
