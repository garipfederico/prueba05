import React from "react";
import "../css/ComponentePrueba.css"
// import Nerd from "../images/nerd.jpeg"

class Prueba01 extends React.Component {
    render() {
        return (
            <div className={'ImagenDelNerd'}>
                <img src={this.props.src} alt={"Foto"} />
                {/* despues de props. sigue el nombre de la variable que se pasa como parametro*/}
            </div>
        )
    }
}

export default Prueba01