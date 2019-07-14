import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import ListProyect from './Components/ListProyect'

function App() {
  return (
    <div className="App">
       <Header nombre='Joaquin'/> {/*Entregar como name la variable recibida desde server */}
       <ListProyect/>
    </div>
  );
}

export default App;
