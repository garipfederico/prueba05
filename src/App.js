import React from 'react';
import logo from './logo.svg';
import Nerd from './components/ComponentePrueba';
import './App.css';
import NombreDeEjemplo from './pages/DetallesDePlanPage'

function App() {
  return (
<<<<<<< HEAD
      <NombreDeEjemplo/>
=======
      <div>
       <Nerd src={require("./images/nerd.jpeg")}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 3eb32983de4dfb0cfd76d1f98e9ecb69ed228e19
  );
}

export default App;
