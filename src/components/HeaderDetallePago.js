import React from "react";
import '../css/styleDDP.css'
import LogoPago from "../images/LogoPagoPlan.GIF";

class HeaderDetallePago extends React.Component {
    render()
    {
        return (
            <div>
                <header className="divStyle">
                    <p className="whoWeAre">{this.props.textoPrueba}</p>
                    <div className="divDetail">
                        <img className="imagenLogo" src={LogoPago} alt="logo"/>
                    </div>
                </header>
            </div>
        )
    }
}
export default HeaderDetallePago;