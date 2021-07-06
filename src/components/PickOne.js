import React from 'react';
import '../css/PickOne.css'

class PickOne extends React.Component
{
    render()
    {
        const message = this.props.message;
        const grupo = this.props.grupo;

        const lista = this.props.Listado;
        const listItems = lista.map((lista)=>
            <label className="container">
                <input type="radio" name={grupo}/>
                <span className = "checkmark"> </span>
                <div className="content"><p>{lista}</p></div>
            </label>
        );

        return(
            <form id="main-form">
                <div id="pickOne-div">
                    <label>
                        {message}
                    </label>
                    <div id="pickOne-div-radius">
                        {listItems}
                    </div>
                </div>
            </form>
        )
    }
}
export default PickOne;