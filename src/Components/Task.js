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
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleClick(event,index) {
    props.displayHours()
    setSelectedIndex(index);
  }

 
  return (
    <List className={classes.root}>
      <ListItem button
      selected={selectedIndex === 0}
      onClick={event => handleClick(event, 0)}>
        

        <ListItemText primary={props.name} secondary="Jan 9, 2014" />
        <div className={classes.root}>
            <LinearProgress variant="determinate" value={props.progress} />
        </div>    
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>


  );
}
