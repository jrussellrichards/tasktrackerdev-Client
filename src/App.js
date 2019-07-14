import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Project from './Components/Project'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
       <Header nombre='Joaquin'/> {/*Entregar como name la variable recibida desde server */}
       <Grid  container >
         <Grid item xs >
           Proyectos
         </Grid>
         <Grid item xs >
           Tareas
         </Grid>
         <Grid item xs>
           Configuración
         </Grid>
       </Grid>
       <Project name='Fifa19'/>

    </div>
  );
}

export default App;
