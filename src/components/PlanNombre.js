import React from 'react';
import '../css/PlanNombre.css'

import imgPlan from '../images/Planes-Completo.svg'

class PlanNombre extends React.Component
{
    render()
    {
        return(
            <div id="bordePlanCompleto">
                <img id="imagenPlan" src={imgPlan}/>
                <p id="planCompleto">Plan<br/> Completo</p>
            </div>
        )
    }
}
export default PlanNombre;