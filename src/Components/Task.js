import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Task(props) {
  const classes = useStyles();

  function handleClick(index) {
    props.selectTask(index);
    props.displayHours()
  }

 
  return (
    <List className={classes.root}>
      <ListItem button
      onClick={() => handleClick( props.id)}
      selected={props.id === props.selectedTask}
      >
        

        <ListItemText primary={props.name} secondary="Jan 9, 2014" />
        <div className={classes.root}>
            <LinearProgress variant="determinate" value={props.progress} />
        </div>    
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>


  );
}
