import React from "react";
import '../css/HeaderDetallePago.css'
import LogoPago from "../images/LogoPagoPlan.GIF";

class HeaderDetallePago extends React.Component {
    render()
    {
        return (
            <div>
                <header id="divStyle">
                    <p id="whoWeAre">{this.props.textoPrueba}</p>
                    <div id="divDetail">
                        <img id="imagenLogo" src={LogoPago} alt="logo"/>

                    </div>
                </header>
            </div>
        )
    }
}
export default HeaderDetallePago;