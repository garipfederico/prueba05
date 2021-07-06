import React from 'react';
import {LoremIpsum} from "react-lorem-ipsum";
import '../css/FormularioDeRegistro.css'
import Input from '../components/Input'
import Choose from '../components/Choose'
import PickOne from '../components/PickOne'
import TeryCon from '../components/TerminosYCondiciones'

class FormularioDeRegistro extends React.Component
{
    render()
    {
        return(
            <div id="fdr">
                <Input message={"Aquí va algo"}/>
                <Choose message="Lista 1" Listado={["Item 1", "Item 2", "Item 3", "Item 4"]}/>
                <Input message={"Lorem ipsum dolor sit amet, consecuter"}/>
                <Choose message="Lista 2" Listado={["Item 1", "Item 2", "Item 3", "Item 4", "Anticostitucionalmente"]}/>
                <Input message={"Este es el tercer input"}/>
                <PickOne message="Elige uno" grupo="unoDeTres" Listado={["minimo", "anticonstitucionalmente", "maximo"]}/>
                <TeryCon/>
                <button type="submit" id="boton">Continuar</button>
            </div>
        )
    }
}
export default FormularioDeRegistro;