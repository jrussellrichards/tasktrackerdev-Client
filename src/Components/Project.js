import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


export  class Project extends React.Component {
  
    
   tasks=this.props.tasks
   id=this.props.id
   

   onClickListItem = () => {
    this.props.handleClick(this.props.id)
  
   }
   
   render(){

    return (
      <List >
        <ListItem button onClick={this.onClickListItem}>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={this.props.name} secondary="Jan 9, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
  
  
    );

   }
 
}
