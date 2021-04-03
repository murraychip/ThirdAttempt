import React, { Component } from 'react'
class HuntsListSingleItem extends Component {
    render() {
        return ( 
            <tr><td>Hunt {this.props.id} </td></tr> 
        )
    }
}
export default HuntsListSingleItem
