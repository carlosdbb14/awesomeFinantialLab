import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function Balance(props) {
    return (
        <div className="balance-container">
            <span className="title-home"><b>Mi balance</b></span>
            <div className="balance-card">
                <div className="balance-value">
                    ${props.value}
                </div>
                <div className="balance-add"><b>+</b></div>
                <div className="balance-resume">
                    <div className="balance-expenses">
                        <FontAwesomeIcon icon={faChevronCircleUp} size="2x"/>
                        <div className="balance-value-text">
                            Egresos
                            ${props.expenses}
                        </div>
                    </div>
                    <div className="balance-ingress">
                        <FontAwesomeIcon icon={faChevronCircleDown} size="2x"/>
                        <div className="balance-value-text">
                            Ingresos
                            ${props.ingress}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
