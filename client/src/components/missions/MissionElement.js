import React from 'react'

import {Button} from 'react-bootstrap';

import Timer from 'react-compound-timer'

import  { Component } from 'react'

export default class MissionElement extends Component {

    constructor(props){
        super(props);
        this.state ={
            ren:"Empezar la misión",
        }
    }

    render() {
        let rene = (<Timer
            initialTime={this.props.time}
            direction="backward"
        >
            {() => (
                <React.Fragment>
                    <Timer.Days /> dias 
                    <Timer.Hours /> horas
                    <Timer.Minutes /> minutos
                    <Timer.Seconds /> seconds
                </React.Fragment>
            )}
        </Timer>)
        return (
            <div>
                <div className="mission-container">
                    <div>
                        <div><b>{this.props.title}</b></div>
                        <div>{this.props.description}</div>
                    </div>
                    <div>
                    <Button variant="info" onClick={() => this.setState({ren:rene})}>{this.state.ren}</Button>
                    
                    </div>
                    
                </div>
            </div>
        )
    }
}

