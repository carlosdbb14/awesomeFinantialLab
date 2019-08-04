import React from 'react'

import {Form,Button} from 'react-bootstrap';


export default class GoalsAdd extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            value:"0",
            classtras:"expense"
        }
    }

    changesvalue(e){
        this.setState({
            value:e.target.value
        })
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
render(){
    return (
        <div>
            <span className="title-home"><b>Añadir Meta</b></span>
                <div className="balance-add-container">
                    <Form>
                     <Form.Group controlId="Category">
                            <Form.Label>¿Cual es el nombre de tu meta?</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="Category">
                            <Form.Label>Tipo de meta:</Form.Label>
                            <Form.Control as="select">
                                <option>Viajes</option>
                                <option>Carro</option>
                                <option>Estudio</option>
                                <option>Casa propia</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Category">
                            <Form.Label>Valor:</Form.Label>
                            <Form.Control type="number" placeholder="50.000" onChange={(e) => this.changesvalue(e)}/>
                        </Form.Group>
                    </Form>
                    <div className={`transaction-value ${this.state.classtras}`}>
                        ${this.numberWithCommas(this.state.value)}
                    </div>
                    <div className="transaction-button">
                        <Button>Añadir Meta</Button>
                    </div>
                    
                </div>
        </div>
    )
}
}
