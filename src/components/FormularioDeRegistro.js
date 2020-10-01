import React from 'react';
import {LoremIpsum} from "react-lorem-ipsum";
import '../css/FormularioDeRegistro.css'
import Input from '../components/Input'
import Choose from '../components/Choose'
import PickOne from '../components/PickOne'

class FormularioDeRegistro extends React.Component
{
    render()
    {
        return(
            <div>
                <Input message={"Aquí va algo"}/>
                <Choose message="Lista 1" Listado={["Item 1", "Item 2", "Item 3", "Item 4"]}/>
                <Input message={"Lorem ipsum dolor sit amet, consecuter"}/>
                <Choose message="Lista 2" Listado={["Item 1", "Item 2", "Item 3", "Item 4"]}/>
                <Input message={"Este es el tercer input"}/>
                <PickOne message="Elige uno" grupo="unoDeTres" Listado={["minimo", "medio", "maximo"]}/>
                <form>
                    <p style={{height:"40vw", width:"90vw", overflow:"auto"}}>
                        <LoremIpsum p={10}/>
                    </p>
                </form>
                <form>
                    Términos y condiciones
                    <input type="checkbox"/>
                </form>
                <button>Continuar</button>
            </div>
        )
    }
}
export default FormularioDeRegistro;