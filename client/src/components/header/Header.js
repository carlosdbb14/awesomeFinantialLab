import React from 'react'
import './Header.css'

import profile from '../../img/profile.jpg'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-profile">
                <img src={profile} alt="profile"></img>
            </div>
            Luisa López Rodríguez
            <div className="header-logo">
                RíoApp
            </div>
        </div>
    )
}
