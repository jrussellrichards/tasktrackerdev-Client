import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import Projects from './Components/ProjectsList'
import Task from './Components/Task'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hours from './Components/Hours'
import Dialog from './Components/Dialog'
const fifa19 = require('./img/fifa19.png')
const lineage = require('./img/lineage.png')
const starWars = require('./img/starWars.png')
const Pocoyo = require('./img/pocoyo.jpg')
const Doraemon = require('./img/cosmico.png')



var projects = [
  {
    "id": 1,
    "name": "Fifa19",
    "img": fifa19,
    'tasks': [
      { id: "1", name: 'hola', "progress": 100 },
      { id: "2", name: 'esta', "progress": 40 },
      { id: "3", name: 'es', "progress": 30 },
      { id: "4", name: 'una', "progress": 30 },
      { id: "5", name: 'tarea', "progress": 50 },
    ]
  },
  {
    "id": 2,
    "img": starWars,
    "name": "StarWars",
    'tasks': [
      { id: "51", name: 'soy', "progress": 10 },
      { id: "6", name: 'muy', "progress": 50 },
      { id: "7", name: 'rapido', "progress": 70 },
      { id: "8", name: 'gracias', "progress": 40 },
      { id: "9", name: 'a react', "progress": 50 },
    ]
  },
  {
    "id": 3,
    "img": Pocoyo,
    "name": "Pocoyo",
    'tasks': [
      { id: "10", name: 'el', "progress": 25 },
      { id: "11", name: 'trabajo', "progress": 20 },
      { id: "12", name: 'consiste', "progress": 30 },
      { id: "13", name: 'en', "progress": 90 },
      { id: "14", name: 'pensar', "progress": 35 },
    ]
  },
  {
    "id": 4,
    "img": Doraemon,
    "name": "Doraemon",
    'tasks': [
      { id: "15", name: 'mucha', "progress": 12 },
      { id: "16", name: 'gente', "progress": 12 },
      { id: "17", name: 'piensa', "progress": 12 },
      { id: "18", name: 'sin', "progress": 12 },
      { id: "19", name: 'pensar', "progress": 12 },
    ]
  },
  {
    "id": 5,
    "img": lineage,
    "name": "Lineage 3",
    'tasks': [
      { id: "20", name: 'las', "progress": 100 },
      { id: "21", name: 'percusiones', "progress": 60 },
      { id: "22", name: 'de', "progress": 30 },
      { id: "23", name: 'fumar', "progress": 40 },
      { id: "24", name: 'son malas', "progress": 50 },
    ]
  }
]


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