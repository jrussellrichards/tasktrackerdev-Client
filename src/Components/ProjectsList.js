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


class ProjectsList extends Component {
    state = {
      rows: []
    }
    
    componentDidMount() {
      
      fetch("/express")
        .then(r => r.json())
        .then(especies => {
          this.setState({rows: especies});
        })  
    }
  
    render() {
      return (
        
          <Table datos={this.state.rows}/> 
        
        
  
        
      );
    }
  }