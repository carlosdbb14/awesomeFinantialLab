import React, { Component } from 'react'
import './Navbar.css'
import NavbarElement from './NavbarElement'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:0
        }
    }
    changeactive(numicon,parent){
        parent.setState({
            active:numicon
        })
        parent.props.changefunc(numicon,parent.props.parentnav)
    }
    render() {
        return (
            <div className="navbar-container">
                <NavbarElement activeicon={this.state.active} posicon={0} onactive={this.changeactive} parent={this}/>
                <NavbarElement activeicon={this.state.active} posicon={1} onactive={this.changeactive} parent={this}/>
                <NavbarElement activeicon={this.state.active} posicon={2} onactive={this.changeactive} parent={this}/>
                <NavbarElement activeicon={this.state.active} posicon={3} onactive={this.changeactive} parent={this}/>
            </div>
        )
    }
}
