import React from 'react'

import TransactionsElement from './TransactionElement'

export default function Transactions() {
    return (
        <div className="balanace-transactions">
            <span className="title-home"><b>Mis Transacciones</b></span>
            <div className="transactions-container">
                <TransactionsElement title="Libros" description="des" value="50.000" type="expense"/>
                <TransactionsElement title="Quincena" description="des" value="400.000" type="ingress"/>
                <TransactionsElement title="Regalo" description="des" value="50.000" type="ingress"/>
                <TransactionsElement title="Transporte" description="des" value="40.000" type="expense"/>
            </div>
            <div className="transaction-add" onClick={() => window.location = "/balance/add"}>
                +
            </div>
        </div>
    )
}
