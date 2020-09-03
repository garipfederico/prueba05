import React from "react";

import {Link} from 'react-router-dom'

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
                        <Link to="/valorFijo"><img id="imagenLogo" src={LogoPago} alt="logo"/></Link>

                    </div>
                </header>
            </div>
        )
    }
}
export default HeaderDetallePago;