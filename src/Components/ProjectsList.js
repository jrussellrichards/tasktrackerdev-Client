import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));




export default class ProjectsList extends React.Component {

    projects=this.props.projects   
    
  
    render() {
      return (
        
          <div>
             {this.projects.map(project =>(
              <Project name={project.name} key={project.id.toString()}/>

            ))}
          </div>
        
        
  
        
      );
    }
  }