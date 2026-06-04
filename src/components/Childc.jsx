import React from 'react'
import { MessageContext } from '../App.jsx';

const Childc = ({/* message */}) => {
    //Child component which will receive the data from parent component
    const message = React.useContext(MessageContext);

    return (
        <div>Childc: {message}</div>
    )
}

export default Childc