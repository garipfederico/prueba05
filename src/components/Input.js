import React from 'react';

class Input extends React.Component
{
    render()
    {
        const message = this.props.message
        return(
            <form>
                <label style={{margin: "0 1vw 0 4vw"}}>
                    {message}
                </label>
                <input/>
            </form>
        )
    }
}
export default Input;