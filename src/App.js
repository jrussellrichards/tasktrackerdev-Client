import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import Projects from './Components/ProjectsList'
import Task from './Components/Task'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

var projects=[
    {"id":1,"name":"Fifa19"},
    {"id":2,"name":"StarWars"},
    {"id":3,"name":"Pocoyo"},
    {"id":4,"name":"Doraemon"},
    {"id":5,"name":"Lineage 3"}
]
class App extends React.Component {

  state={
    tasks:[
      {id:"1",name:'diseñar',"progress":10},
      {id:"2",name:'trabajar',"progress":20},
      {id:"3",name:'construir',"progress":30},
      {id:"4",name:'pensar',"progress":40},
      {id:"5",name:'rehacer',"progress":50},
    ]
  }

  render(){

    return (
      <div className="App">
         <Header nombre='Joaquin'/> {/*Entregar como name la variable recibida desde server */}
         <Grid  container >
           <Grid item xs >
              <Typography variant="h5" component="h5">
                  Projects
              </Typography>
              <Projects projects={projects}/>
           </Grid>
           <Grid item xs >
              <Typography variant="h5" component="h5">
                  Tareas
              </Typography>
              {
                this.state.tasks.map(task=>
                  
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
           </Grid>
         </Grid>
         
  
      </div>
    );

  }
  
}

export default App;
