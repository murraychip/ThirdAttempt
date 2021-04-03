import React, { Component } from 'react'
import logo from './logo.svg';
class Welcome extends Component {
    render() {
        return (
            <header className="App-header">
                <h3>I can make an app for that</h3>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}
export default Welcome
