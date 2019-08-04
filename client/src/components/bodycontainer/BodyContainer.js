import React, { Component } from 'react'

import Home from '../home/Home'
import Balance from '../balance/Balance'
import BalanceAdd from '../balanceadd/BalanceAdd'
import Goals from '../goals/Goals'
import GoalsAdd from '../goalsadd/GoalsAdd'

import './BodyContainer.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class BodyContainer extends Component {


    render() {
        return (
            <div className="bodycontainer-container">
                <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/balance" exact component={Balance} />
                    <Route path="/balance/add" exact component={BalanceAdd} />
                    <Route path="/goals" exact component={Goals} />
                    <Route path="/goals/add" exact component={GoalsAdd} />
                </Router>
            </div>
        )
    }
}
