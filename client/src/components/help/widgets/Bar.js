import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faShoppingBag,faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'


export default function Bar(props) {
    let icons = [faDollarSign,faShoppingBag,faMoneyBillWave]
    let style = {
        height: props.status+"%"
    }   
    return (
        <div className="bar-container-element">
            <div>
                <FontAwesomeIcon icon={icons[props.icon]} size="2x"/>
            </div>
            <div className="bar-barlight">
                <div className="bar-barfull" style={style}>

                </div>
            </div>
        </div>
    )
}
