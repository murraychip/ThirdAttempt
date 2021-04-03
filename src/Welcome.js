import React, { Component } from 'react'
import logo from './logo.svg';
class Welcome extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to Murray's Scavenger Hunt
                </p>
            </header>
        )
    }
}
export default Welcome
