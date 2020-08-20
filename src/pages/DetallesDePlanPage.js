import React from "react";
import Header from "../components/HeaderDetallePago"
import Detail from "../components/Detalle"
import PlanNombre from "../components/PlanNombre"

class DetallesDePlanPage extends React.Component
{
    render()
    {
        return(
            <div>
                <Header textoPrueba={" ► Quienes somos..."}/>
                <Detail det={"DETALLE"}/>
                <PlanNombre/>
            </div>
            )
    }
}
export default DetallesDePlanPage;