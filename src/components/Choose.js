import React from 'react';
import '../css/Choose.css'

class Choose extends React.Component
{
    render(props)
    {
        const message = this.props.message;

        const lista = this.props.Listado;
        const listItems = lista.map((lista)=>
            <option>
                {lista}
            </option>
        );

        return(
            <form id="choose-form">
                <label id="choose-label">
                    {message}
                </label>
                <select>
                    {listItems}
                </select>
            </form>
        )
    }
}
export default Choose;