import React, { Component } from 'react'

import Home from '../home/Home'
import './BodyContainer.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class BodyContainer extends Component {


    render() {
        return (
            <div className="bodycontainer-container">
                <Router>
                    <Route path="/" exact component={Home} />
                </Router>
            </div>
        )
    }
}
