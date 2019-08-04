import React, { Component } from 'react'

import Balance from './widgets/Balance';
import Goals from './widgets/Goals'
import Transactions from './widgets/Transactions'


import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Balance value="50.000" expenses="40.000" ingress="50.000" />
                <Goals/>
                <Transactions/>
            </div>
        )
    }
}
