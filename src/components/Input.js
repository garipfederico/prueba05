import React from 'react';
import '../css/Input.css'

class Input extends React.Component
{
    render()
    {
        const message = this.props.message
        return(
            <form className="input-form">
                <label className="input-label">
                    <p>{message}</p>
                </label>
                <input className="input-input"/>
            </form>
        )
    }
}
export default Input;