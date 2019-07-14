import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Project from './Components/Project'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
       <Header nombre='Joaquin'/> {/*Entregar como name la variable recibida desde server */}
       <Grid  container >
         <Grid item xs >
            <Typography variant="P" component="h2">
                Projects
            </Typography>
         </Grid>
         <Grid item xs >
         <Typography variant="P" component="h2">
                Tareas
            </Typography>
         </Grid>
         <Grid item xs>
         <Typography variant="P" component="h2">
                Configuración
            </Typography>
         </Grid>
       </Grid>
       <Project name='Fifa19'/>

    </div>
  );
}

export default App;
