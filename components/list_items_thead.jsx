import React from 'react';
import ReactDOM from 'react-dom'

class ListThead extends React.Component {
    render() {
        return (
        <thead>
            <tr>
            <th>Currency:</th>
            <th>Transaction name:</th>
            <th>Amount value:</th>
            <th>Currency value:</th>
            <th>Transaction value:</th>
            <th></th>
            </tr>
        </thead>
        )
    }
}

export default ListThead