import React from 'react';
import {Link} from 'react-router-dom'

function ValorFijo(){
    return  <div>
                <h1>Valor Fijo</h1>
                <Link to="/home"><button>Volver</button></Link>
            </div>
}

export default ValorFijo;