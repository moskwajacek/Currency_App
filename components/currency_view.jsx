import React from 'react';
import ReactDOM from 'react-dom'

class CurrencyView extends React.Component {

    render() {

        const currencyList = this.props.currency.map((curr, index) => <li key={index}>{curr.name}: {curr.value}</li>)
        
        return (
            <div>
                {currencyList}
            </div>
        )
    }
}

export default CurrencyView;