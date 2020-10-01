import React from "react";

import {Link} from 'react-router-dom'

import '../css/HeaderDetallePago.css'

class HeaderDetallePago extends React.Component {
    render()
    {
        const Logo = this.props.Logo
        return (
            <div>
                <header id="divStyle">
                    <p id="whoWeAre">► Quienes somos...</p>
                    <div id="divDetail">
                        <Link to="/valorFijo"><img id="imagenLogo" src={Logo} alt="logo"/></Link>

                    </div>
                </header>
            </div>
        )
    }
}
export default HeaderDetallePago;