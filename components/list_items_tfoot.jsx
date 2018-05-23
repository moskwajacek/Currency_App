import React from 'react';
import ReactDOM from 'react-dom'

class ListTfoot extends React.Component {
    
    render() {

        let sum = 0;
        let tempArray = [];
        this.props.list.map(element => { 
            sum += Number(element.amountVal);
            tempArray.push(Number(element.amountVal));
            tempArray.sort((a,b) => b-a)
        })

        return (
            <tfoot>
                <tr>
                <td></td>
                <td>Sum of transaction:</td>
                <td></td>
                <td></td>
                <td>{ sum }</td>
                <th></th>
                </tr>
                <tr>
                <td></td>
                <td>Bigest transaction:</td>
                <td></td>
                <td></td>
                <td>{ tempArray[0] }</td>
                <th></th>
                </tr>
            </tfoot>
        )
    }
}

export default ListTfoot