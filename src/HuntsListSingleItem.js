import React, { Component } from 'react'
class HuntsListSingleItem extends Component {
    render() {
        var hunt = this.props.hunt;
        var strKey = hunt.id || hunt.name;
        return (
            <tr key={strKey}>
                <td>Hunt {hunt.name} </td>
                <td>
                    <button onClick={() => this.props.deleteFunction(hunt)}>Delete</button>
                </td>
                <td>
                {
                    hunt.image && <img alt="Preview of hunt" src={hunt.image} style={{ width: 400 }} />
                }
                </td>
            </tr> 
        )
    }
}
export default HuntsListSingleItem
