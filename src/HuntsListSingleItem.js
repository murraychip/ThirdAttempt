import React, { Component } from 'react'
class HuntsListSingleItem extends Component {
    render() {
        var hunt = this.props.hunt; 
        return (
            <li className="singleListItem">
                <div>
                    <div className="field"> 
                        {hunt.name}
                    </div>
                    <div className="buttons">
                        <button onClick={() => this.props.deleteFunction(hunt)}>Delete</button> 
                    </div>
                </div>
            </li> 
        )
    }
}
export default HuntsListSingleItem
