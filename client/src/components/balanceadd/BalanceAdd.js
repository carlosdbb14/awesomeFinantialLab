import React from 'react'

import {Form,Button} from 'react-bootstrap';

export default class BalanceAdd extends React.Component {

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

    render() {
        return (
            <div>
                <span className="title-home"><b>Añadir transacción</b></span>
                <div className="balance-add-container">
                    <Form>
                        <Form.Group controlId="Type">
                            <Form.Label>Tipo de transacción:</Form.Label>
                            <Form.Control as="select" 
                            onChange={(e) => {
                                if(e.target.value ==="Ingreso"){
                                    this.setState({classtras:"ingress"})
                                }else{
                                    this.setState({classtras:"expense"})
                                }
                                
                            }}>
                                <option>Gasto</option>
                                <option>Ingreso</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Category">
                            <Form.Label>Categoria:</Form.Label>
                            <Form.Control as="select">
                                <option>Ropa</option>
                                <option>Comida</option>
                                <option>Trasporte</option>
                                <option>Comida</option>
                                <option>Comida</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Category">
                            <Form.Label>Otra? Cual?</Form.Label>
                            <Form.Control type="text" placeholder="" />
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
                        <Button>Añadir transacción</Button>
                    </div>
                    
                </div>
    
            </div>
        )
    }
}

