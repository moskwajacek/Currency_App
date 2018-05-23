import React from 'react';
import ReactDOM from 'react-dom';

import ListThead from './list_items_thead.jsx';
import ListTbody from './list_items_tbody.jsx';
import ListTfoot from './list_items_tfoot.jsx';

class ListItems extends React.Component {
    render () {

        
        
        

        return(
            <table>
                <ListThead />
                <ListTbody list={this.props.list} />
                <ListTfoot list={this.props.list} />  
            </table>
            
        )
    }
}

export default ListItems;