import React from 'react'

import GoalsElement from './GoalsElement'
import GoalsAdd from './GoalsAdd'

export default function Goals() {
    return (
        <div className="goals-container-main">
            <span className="title-home"><b>Mis metas</b></span>
            <div className="goals-container">
                <GoalsElement title="Viaje a San Andres" porcent="12%" icon={0} type="primary"/>
                <GoalsElement title="Mi carro" porcent="40%" icon={1} type="secondary"/>
                <GoalsAdd/>
            </div>
            
        </div>
    )
}
