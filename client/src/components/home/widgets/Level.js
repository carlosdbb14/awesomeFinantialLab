import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

export default function Level() {
    return (
        <div className="level-container-main">
            <span className="title-home"><b>Mi nivel</b></span>
            <div className="level-container">
                <div className="level-bar">
                    <div className="level-bar-color">

                    </div>
                </div>
                <div className="level-final">
                    <FontAwesomeIcon icon={faMedal} size="3x"/>
                </div>
            </div>
        </div>
    )
}
