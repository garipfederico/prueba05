import React from "react";

import '../css/Detalle.css'

class Detalle extends React.Component{
    render()
    {
        return(
            <div id="Detail">
                <p id="letra">{this.props.det}</p>

            </div>
        )
    }
}
export default Detalle;