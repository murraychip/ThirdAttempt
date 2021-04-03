import React, { Component } from 'react'
import HuntsListSingleItem from './HuntsListSingleItem'
class HuntsListComponent extends Component {
    render() { 
        return (
            <table>
                <HuntsListSingleItem id="1" />
                <HuntsListSingleItem id="2" />
                <HuntsListSingleItem id="3" />
            </table>
        )
    }
}
export default HuntsListComponent
