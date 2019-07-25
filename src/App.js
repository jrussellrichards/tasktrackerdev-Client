import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import Projects from './Components/ProjectsList'
import Task from './Components/Task'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hours from './Components/Hours'



var projects = [
  {
    "id": 1,
    "name": "Fifa19",
    'tasks': [
      { id: "1", name: 'diseñar', "progress": 10 },
      { id: "2", name: 'trabajar', "progress": 20 },
      { id: "3", name: 'construir', "progress": 30 },
      { id: "4", name: 'pensar', "progress": 40 },
      { id: "5", name: 'rehacer', "progress": 50 },
    ]
  },
  {
    "id": 2,
    "name": "StarWars",
    'tasks': [
      { id: "51", name: 'diseñar', "progress": 10 },
      { id: "6", name: 'trabajar', "progress": 20 },
      { id: "7", name: 'construir', "progress": 30 },
      { id: "8", name: 'pensar', "progress": 40 },
      { id: "9", name: 'rehacer', "progress": 50 },
    ]
  },
  {
    "id": 3,
    "name": "Pocoyo",
    'tasks': [
      { id: "10", name: 'diseñar', "progress": 10 },
      { id: "11", name: 'trabajar', "progress": 20 },
      { id: "12", name: 'construir', "progress": 30 },
      { id: "13", name: 'pensar', "progress": 40 },
      { id: "14", name: 'rehacer', "progress": 50 },
    ]
  },
  {
    "id": 4,
    "name": "Doraemon",
    'tasks': [
      { id: "15", name: 'diseñar', "progress": 10 },
      { id: "16", name: 'trabajar', "progress": 20 },
      { id: "17", name: 'construir', "progress": 30 },
      { id: "18", name: 'pensar', "progress": 40 },
      { id: "19", name: 'rehacer', "progress": 50 },
    ]
  },
  {
    "id": 5,
    "name": "Lineage 3",
    'tasks': [
      { id: "20", name: 'diseñar', "progress": 10 },
      { id: "21", name: 'trabajar', "progress": 20 },
      { id: "22", name: 'construir', "progress": 30 },
      { id: "23", name: 'pensar', "progress": 40 },
      { id: "24", name: 'rehacer', "progress": 50 },
    ]
  }
]

class App extends React.Component {
  

  state = {

    'tasks': [
      { id: "1", name: 'diseñar', "progress": 10 },

    ]
  }


  handleClick = (id) => {
  // this.setState({
  //  'tasks':  projects.filter(project => project.id = id).tasks
  // })
    console.log(projects.filter(project => project.id = id))
    console.log(id)

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
            <Projects projects={projects} handleClick={this.handleClick}/>
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
                  progress={task.progress}
                />
              )
            }

          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="h5">
              Configuración
            </Typography>
            <Hours />


          </Grid>
        </Grid>


      </div>
    );

  }

}

export default App;
