import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import HuntsListComponent from "./HuntsListComponent";
import Welcome from "./Welcome";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Murray Scavenger Hunts</h1>
                    <h3>I can make an app for that</h3>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/hunts">Stuff</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Welcome} />
                        <Route path="/hunts" component={HuntsListComponent} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}