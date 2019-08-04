import React, { Component } from 'react'

import Bar from './widgets/Bar'
import Question from './widgets/Question'
import Advice from './widgets/Advice'

import './Help.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'

import json from './que.json'

export default class Help extends Component {
    constructor(props){
        super(props);
        let elements = []
        json.forEach((e) =>{
            elements.push(
                <Question url={e.url} title={e.title} description={e.que}/>
            )
        })
        this.state = {
            deudas: 50,
            inversion: 50,
            money: 50,
            active:elements,
            activenum:0
        }
        console.log(this.state.active.url)
    }
    alter(values){
        this.setState({
            deudas:this.state.deudas-values[0],
            inversion:this.state.inversion-values[1],
            money:this.state.money-values[2],
            activenum:(this.state.activenum+1)%4
        })
        console.log(this.state);
    }
    render() {
        console.log(this.state.active.url)
        return (
            <div className="help-container">
                <div className="bars-container">
                    <Bar icon ={0} status={this.state.deudas}/>
                    <Bar icon ={1} status={this.state.inversion}/>
                    <Bar icon ={2} status={this.state.money}/>
                </div>
                <div className="question-container">
                    {/* <Question url={this.state.active.url} title={this.state.active.title} description={this.state.active.que}/> */}
                    {this.state.active[this.state.activenum]}
                </div>
                <div className="actions">
                    <div className="accept" onClick={() => this.alter(json[this.state.activenum].y)}>
                        <FontAwesomeIcon icon={faThumbsUp} size="2x"/>
                    </div>
                    <div className="decline" onClick={() => this.alter(json[this.state.activenum].n)}>
                        <FontAwesomeIcon icon={faThumbsDown} size="2x"/>
                    </div>
                </div>
                <div className='advice'>
                    <span className="title-home"><b>Consejero financiero</b></span>
                    <Advice 
                    title="CONSOLIDA TU DEUDA EN UN SOLO LUGAR!"
                    des="Es más beneficioso tener todas tus deudas con alguien confiable que te entiende.
                    Resultado esperado: Si lo haces así, podrías tener menos deudas, cuotas más bajas y mejores tasas.
                    "/>
                </div>
            </div>
        )
    }
}
