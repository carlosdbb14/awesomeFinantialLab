import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'


export default function GoalsElement(props) {
    return (
        <div className="goals-element">
            <div className="goals-element-title">
                <b> {props.title}</b>
            </div>
            <div className="goals-element-porcent">
                {props.porcent}
            </div>
            <div className="goals-element-icon">
                <FontAwesomeIcon icon={faPlaneDeparture} />
            </div>
        </div>
    )
}
