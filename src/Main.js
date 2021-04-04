import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import HuntsListComponent from "./HuntsListComponent";
import Welcome from "./Welcome";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import "./Main.css"


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div id="topBar">
                        <h1>Murray Scavenger Hunts</h1>
                        <div id="headerMenu">
                        <ul id="header" className="header">
                            <li><NavLink to="/">Welcome</NavLink></li>
                            <li><NavLink to="/hunts">Hunts</NavLink></li>
                            <li><AmplifySignOut /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Welcome} />
                        <Route path="/hunts" component={HuntsListComponent} />
                    </div>
                </div>
            </HashRouter>
        );
    }
} 
export default withAuthenticator(Main);