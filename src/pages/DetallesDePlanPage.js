import React from "react";
import Header from "../components/HeaderDetallePago"
import Detail from "../components/Detalle"
import PlanNombre from "../components/PlanNombre"
import Contenido from "../components/Contenido"
import Horizontal from "../components/Horizontal"
import Logo from "../images/LogoPagoPlan.GIF";


class DetallesDePlanPage extends React.Component
{
    render()
    {
        let d2=500
        let d1=(d2*3)-((d2*3)/100*10)
        let d3=2200

        const MatrizContenido = [["Item 1", true], ["Item 2", false], ["Item 3", true], ["Item 4", false]];

        return(
            <div>
                <Header Logo={Logo}/>
                <Detail det={"Detalles"}/>
                <PlanNombre/>
                <Contenido
                    /*
                    Listado = {MatrizContenido}
                     */
                    Listado={["Item 1", "Item 2", "Item 3", "Item 4"]}
                    Banderas={[true, true, true, true]}
                />
                <Horizontal
                    desc1={d1}
                    desc2={d2}
                    desc3={d3}
                    total={d1+d2+d3}
                />
            </div>
            )
    }
}
export default DetallesDePlanPage;