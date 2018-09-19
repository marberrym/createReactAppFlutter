import React, { Component } from 'react';
import Home from './Home.js';
import './App.css'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return <Home postList={this.props.postList}/>
  }
}

let AppSmart = connect(state => state)(App);
export default AppSmart;
