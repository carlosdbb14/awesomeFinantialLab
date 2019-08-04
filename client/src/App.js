import React, { Component } from 'react'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import BodyContainer from './components/bodycontainer/BodyContainer'


import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:0
    }
  }
  changepage(newpage, parent){
    parent.setState({
      page:newpage
    })
    console.log(parent.state)
  }


  render() {
    return (
      <div>
        <Header/>
        <BodyContainer page={this.state.page}/>
        <Navbar changefunc={this.changepage} parentnav={this}/>
      </div>
    )
  }
}
