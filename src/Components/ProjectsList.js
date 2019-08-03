import React from 'react';
import {Project} from './Project'




export default class ProjectsList extends React.Component {

    projects=this.props.projects   
    
  
    render() {
      return (
        
          <div>
             {this.projects.map(project =>(
              <Project 
              handleClick={this.props.handleClick} 
              name={project.name} tasks={project.tasks} 
              id={project.id.toString()}
              selectedProject={this.props.selectedProject}
              selectProject={this.props.selectProject}
              img={project.img}
              />

            ))}
          </div>
        
        
  
        
      );
    }
  }