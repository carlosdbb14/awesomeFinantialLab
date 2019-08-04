import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt,faCoins } from '@fortawesome/free-solid-svg-icons'

export default function TransactionElement(props) {
    let icon = faReceipt;
    if(props.type ==="ingress"){
        icon = faCoins
    }

    return (
        <div className="transaction">
            <div className="transaction-icon">
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="transaction-info">
                <div>
                    {props.title}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
            <div className={props.type}>
                ${props.value}
            </div>
        </div>
    )
}
