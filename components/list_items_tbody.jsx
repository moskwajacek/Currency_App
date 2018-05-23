import React from 'react';
import ReactDOM from 'react-dom'

class ListTbody extends React.Component {
    
    render() {

        const listElements = this.props.list.map((element, index) => 
            <tr key={index}>
            <td>{ element.currency}</td>
            <td>{ element.name }</td>
            <td>{ element.amount }</td>
            <td>{ element.currencyVal }</td>
            <td>{ Number(element.amountVal) }</td>
            <td><button id={index} onClick={this.props.deleteItem}>Delete</button></td>
            </tr>)

        return (
        <tbody>
            {listElements}
        </tbody>
        )
    }
}

export default ListTbody