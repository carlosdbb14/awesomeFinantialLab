import React, { Component } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import GoalsElement from './widgets/GoalsElement'

import './Goals.css'

export default class Goals extends Component {
    render() {
        return (
            <div className="goal-main-container">
                <GoalsElement title="Viaje a San Andres" porcent="23%" icon="avion"/>
                <div className="goal-create" onClick={() =>window.location ="/goals/add"}>
                    <FontAwesomeIcon icon={faCoins} size="2x"/>
                    <span><b>Crear una nueva meta</b></span>
                </div>
            </div>
        )
    }
}

