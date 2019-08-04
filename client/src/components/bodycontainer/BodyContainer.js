import React, { Component } from 'react'

import Home from '../home/Home'
import Balance from '../balance/Balance'

import './BodyContainer.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class BodyContainer extends Component {


    render() {
        return (
            <div className="bodycontainer-container">
                <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/balance" exact component={Balance} />
                </Router>
            </div>
        )
    }
}
