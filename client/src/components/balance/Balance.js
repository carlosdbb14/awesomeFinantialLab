import React, { Component } from 'react'

import BalanceChar from './widgets/BalanceChar'
import Transactions from './widgets/Transactions'

import './Balance.css'

export default class Balance extends Component {
    render() {
        return (
            <div>
                <BalanceChar/>
                <Transactions/>
            </div>
        )
    }
}
