import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import DetallesDePago from './components/DetallesDePago'
import ValorFijo from './components/ValorFijo.js'

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" component={DetallesDePago}/>
            <Route path="/valorFijo" component={ValorFijo}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
