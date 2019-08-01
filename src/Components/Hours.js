import React from 'react';
import Project from './Project'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
var _ = require('lodash');




export default class extends React.Component {
    
    lista = _.range(1, 13)


    render() {
        return (


            <List component="nav" aria-label="Secondary mailbox folder">
                 {this.lista.map(element =>(
              <ListItem
              button
             onClick={() => this.props.displayModal()}
             

          // selected={selectedIndex === 2}
          // onClick={event => handleListItemClick(event, 2)}
          >

              <ListItemText primary={element} />
          </ListItem>

            ))}
                

            </List>



        );


    }


}










