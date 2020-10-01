import React from "react";
import Header from "../components/HeaderDetallePago"
import Detail from "../components/Detalle"
import FormularioDeRegistro from '../components/FormularioDeRegistro'
import Logo from "../images/user.png"



class Registro extends React.Component
{
    render()
    {
        return(
            <div>
                <Header Logo={Logo}/>
                <Detail det={"Registro"}/>
                <FormularioDeRegistro/>
            </div>
        )
    }
}
export default Registro;