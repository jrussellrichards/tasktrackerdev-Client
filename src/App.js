import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import Projects from './Components/ProjectsList'
import Task from './Components/Task'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hours from './Components/Hours'
import Dialog from './Components/Dialog'
import  projects from  './DataBase/projects.json'






class App extends React.Component {
  
  state = {

    'tasks': [  ],
    'hours':  false,
    'selectedTask': 0,
    'selectedProject': 0,
    'Modal': [false,0]
  }


  handleClick = (id) => {


  let filtrado=projects.filter(project => project.id == id)
  this.setState({
   'tasks': filtrado[0].tasks,
   'hours': false
  })

} 

displayHours= () => {
  this.setState(
    {
      'hours':<Hours
      displayModal={this.displayModal} />
    }
  )
}

selectTask= (index) => {
this.setState(
    {
      'selectedTask':index
    }
  )
}

selectProject= (index) => {
this.setState(
    {
      'selectedProject':index
    }
  )
}

displayModal= (hour) => {
this.setState(
    {
      'Modal':[true,hour]
    }
  )
}

closeModal= () => {
this.setState(
    {
      'Modal':false
    }
  )
}


  render() {
    return (
      <div className="App">
        <Header nombre='Joaquin' /> {/*Entregar como name la variable recibida desde server */}
        <Grid container >
          <Grid item xs >
            <Typography variant="h5" component="h5">
              Projects
              </Typography>
            <Projects 
            projects={projects} 
            handleClick={this.handleClick}
            selectedProject={this.state.selectedProject}
            selectProject={this.selectProject}

            />
          </Grid>
          <Grid item xs >
            <Typography variant="h5" component="h5">
              Tareas
              </Typography>
            {
              this.state.tasks.map(task =>

                <Task
                  name={task.name}
                  key={task.id}
                  id={task.id}
                  progress={task.progress}
                  displayHours={this.displayHours}
                  selectedTask={this.state.selectedTask}
                  selectTask={this.selectTask}
                />
              )
            }

          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="h5">
              Configuración
            </Typography>
              {this.state.hours}

          </Grid>
          
        </Grid>
        <Dialog 
        modalState={this.state.Modal}
        closeModal={this.closeModal}
        />


      </div>
    );

  }

}

export default App;