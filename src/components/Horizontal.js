import React from 'react';
import '../css/Horizontal.css'
import visa from '../images/Old_Visa_Logo.svg'

class Horizontal extends React.Component
{
    render()
    {
        return(
            <div id="flexHor">
                <div id="izquierda">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl magna lacus hac
                        inceptos efficitur pharetra dolor inceptos accumsan.</p>

                    <div id="divEntrada">
                        <img src={visa} id="imagenVisa" alt="Imagen Visa"/>

                        <input
                        type="text"
                        id="entrada"
                        placeholder="XX-XXX-XXX-XXX-XXXX"/>
                    </div>

                    <p id="listaConLinea">x3 primeros meses ${this.props.desc1}</p>
                    <p id="listaConLinea">x mes ${this.props.desc2}</p>
                    <p id="listaConLinea">pack diseño 1 ${this.props.desc3}</p>
                </div>

                <div id="derecha">
                    <p id="letraPequeña">Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl magna lacus hac
                        inceptos efficitur pharetra dolor inceptos accumsan. Nulla tristique scelerisque curabitur
                        bibendum consectetur et facilisis eleifend mollis. Leo commodo pulvinar ad litora molestie cras
                        orci mattis ultrices. Orci felis praesent proin inceptos torquent hac. Eros eu congue dui nisl
                        aenean efficitur curae tempus at. Laoreet tortor dictumst vitae senectus dolor mollis.
                        Consectetur suscipit quam mi; ridiculus vehicula tempus sollicitudin nam gravida. Montes
                        ultrices condimentum; porttitor eu leo quam.</p>
                    <p id="total">Total</p><hr id="lineaHor"/><p id="total">${this.props.total}</p>
                    <button id="boton">Finalizar</button>
                </div>
            </div>
        )
    }
}

export default Horizontal;