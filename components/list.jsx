import React from 'react';
import ReactDOM from 'react-dom'

import ListItems from './list_items.jsx';

class List extends React.Component {
    render () {
        return(
            <div>
                <ListItems list={this.props.list} deleteItem={this.props.deleteItem} defValue={this.props.defName}/>
                <button onClick={this.props.deleteList}>Clear transaction list</button>
            </div>
        )
    }
}

export default List;