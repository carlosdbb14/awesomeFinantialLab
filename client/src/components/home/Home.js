import React, { Component } from 'react'

import Balance from './widgets/Balance';
import Goals from './widgets/Goals'
import LevelCircle from './widgets/LevelCircle'


import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <LevelCircle/>
                <Balance value="1.150.000" expenses="1.350.000" ingress="2.500.000" />
                <Goals/>
            </div>
        )
    }
}
