import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import tilde from "../images/Planes-tilde.svg"
import cruz from "../images/x-button.svg"

import '../css/Contenido.css'

class Contenido extends React.Component
{
    render(props)
    {
        const bandera = this.props.Banderas;
        const listFlag = bandera.map((bandera)=>
            <p>{bandera ? <img id="imagen" src={tilde} alt="Tilde"/>: <img id="imagen" src={cruz} alt="Cruz"/>}</p>
        );

        const lista = this.props.Listado;
        const listItems = lista.map((lista)=>
            <li>
                <p id="listaConTilde">{lista}</p>
                <p>{listFlag}</p>
            </li>
        );

        return(
            <div id="flex">
                <ul>
                    {/*{condición  ? 'true' : 'false'}*/}
                    {listItems}
                </ul>
                <p id="parrafo"><LoremIpsum p={2} /></p>
            </div>
        )
    }
}

export default Contenido;