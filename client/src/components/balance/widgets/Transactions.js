import React from 'react'

import TransactionsElement from './TransactionElement'

export default function Transactions() {
    return (
        <div className="balanace-transactions">
            <span className="title-home"><b>Mis Transaciones</b></span>
            <div className="transactions-container">
                <TransactionsElement title="Libros" description="des" value="50.000" type="expense"/>
                <TransactionsElement title="Libros" description="des" value="50.000" type="ingress"/>
                <TransactionsElement title="Libros" description="des" value="50.000" type="ingress"/>
                <TransactionsElement title="Libros" description="des" value="50.000" type="ingress"/>
                <TransactionsElement title="Libros" description="des" value="50.000" type="ingress"/>
                <TransactionsElement title="Libros" description="des" value="50.000" type="ingress"/>
            </div>
            <div className="transaction-add" onClick={() => window.location = "/balance/add"}>
                +
            </div>
        </div>
    )
}
