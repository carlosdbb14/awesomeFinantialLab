import React, { Component } from 'react'

import Bar from './widgets/Bar'
import Question from './widgets/Question'

import './Help.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'



export default class Help extends Component {
    constructor(props){
        super(props);
        this.state = {
            me: 50,
            family: 60,
            money: 10
        }
    }
    alter(values){
        this.setState({
            me:this.state.me-values[0],
            family:this.state.family-values[1],
            money:this.state.money-values[2]
        })
    }
    render() {
        return (
            <div className="help-container">
                <div className="bars-container">
                    <Bar icon ={0} status={this.state.me}/>
                    <Bar icon ={1} status={this.state.family}/>
                    <Bar icon ={2} status={this.state.money}/>
                </div>
                <div className="question-container">
                    <Question url="https://4brf13430svm3bnu053zbxvg-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Instant-Approval-Credit-Cards.jpg" title="Dasdas" description="lorem"/>
                </div>
                <div className="actions">
                    <div className="accept" onClick={() => this.alter([10,-20,50])}>
                        <FontAwesomeIcon icon={faThumbsUp} size="2x"/>
                    </div>
                    <div className="decline" onClick={() => this.alter([-10,20,-50])}>
                        <FontAwesomeIcon icon={faThumbsDown} size="2x"/>
                    </div>
                </div>
            </div>
        )
    }
}
