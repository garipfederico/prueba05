import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'
import DetallesDePago from './pages/DetallesDePlanPage'
import ValorFijo from './components/ValorFijo.js'
import Registro from './pages/Registro'

import model from './components/DetallesDePago.js'

function App() {
  return (
      <BrowserRouter>
            {/*<Redirect to="/registro"/>*/}
        <Switch>
            <Route path="/home" component={DetallesDePago}/>
            <Route path="/valorFijo" component={ValorFijo}/>
            <Route path="/registro" component={Registro}/>
            {/*<Route className="" path="/modelo" component={model}/>*/}
        </Switch>
      </BrowserRouter>
  )
}

export default App;
