import React, { Component } from 'react'
import './Navbar.css'
import NavbarElement from './NavbarElement'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        let routes = ["/","/balance","/goals","/help","/missions"]
        let ac = routes.indexOf(window.location.pathname)
        this.state = {
            active:ac
        }
    }
    changeactive(numicon,newlocal,parent){
        parent.setState({
            active:numicon
        })
        parent.props.changefunc(numicon,newlocal,parent.props.parentnav)
    }
    render() {
        return (
            <div className="navbar-container">
                <NavbarElement activeicon={this.state.active} posicon={0} onactive={this.changeactive} parent={this} local="/"/>
                <NavbarElement activeicon={this.state.active} posicon={1} onactive={this.changeactive} parent={this} local="/balance"/>
                <NavbarElement activeicon={this.state.active} posicon={2} onactive={this.changeactive} parent={this} local="/goals"/>
                <NavbarElement activeicon={this.state.active} posicon={3} onactive={this.changeactive} parent={this} local="/help"/>
                <NavbarElement activeicon={this.state.active} posicon={4} onactive={this.changeactive} parent={this} local="/missions"/>
            </div>
        )
    }
}

