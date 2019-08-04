import React from 'react'

import {Button} from 'react-bootstrap';

export default function Advice(props) {
    return (
        <div className="advice-container">
            <h3>{props.title}</h3>
            <p>{props.des}</p>
            <Button>Entrar y descubrir</Button>
        </div>
    )
}
