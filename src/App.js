import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import DetallesDePago from './pages/DetallesDePlanPage'
import ValorFijo from './components/ValorFijo.js'

import model from './components/DetallesDePago.js'

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" component={DetallesDePago}/>
            <Route path="/valorFijo" component={ValorFijo}/>
            <Route className="" path="/modelo" component={model}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
