import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faChartPie,faCheckSquare,faCommentDollar } from '@fortawesome/free-solid-svg-icons'


export default function NavbarElement(props) {
    let status = "unactive";
    let icons = [faHome,faChartPie,faCheckSquare,faCommentDollar];
    if(props.posicon === props.activeicon){
        status="active"
    }
    return (
        <div className="navbar-element" onClick={() => props.onactive(props.posicon,props.parent)}>
            <FontAwesomeIcon icon={icons[props.posicon]}/>
            <div className={`navbar-element-${status}`}>.</div>
        </div>
    )
}
