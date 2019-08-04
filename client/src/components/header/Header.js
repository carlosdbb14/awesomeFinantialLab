import React from 'react'
import './Header.css'

import profile from '../../img/profile.jpg'

export default function Header() {
    return (
        <div className="header-container">
            
            <div className="header-profile">
                
                <img src={profile} alt="profile"></img>
            </div>
            Luis Lopez Rodriguez
        </div>
    )
}
