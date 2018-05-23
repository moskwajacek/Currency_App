import React from 'react';
import ReactDOM from 'react-dom';

class ChangeCurrency extends React.Component {

    render() {

        const options = (this.props.currency).map( (c, index) => <option key={index} value={c.value} >{c.name}</option>)
        const view = this.props.amount.length < 1 ? false :  <div>Transaction name: {this.props.name}
                                                            <br/>Exchange amount: {this.props.amount}
                                                            <br/>Currency value: {this.props.defValue}
                                                            <br/>Exchange value: {Number(this.props.amountVal)}</div>

        return (
        <div>
            <h3>Type currency:</h3>
            <select onChange={ this.props.handleSelect} >
            {options}
            </select>
            <form>
                <div>
                    <label >Name:</label>
                    <input type="text" value={this.props.name} onChange={this.props.handleNameChange}/>
                {/* </div>
                <div> */}
                    <label >Amount:</label>
                    <input type="number" value={this.props.amount} onChange={this.props.handleAmountChange}/>
                </div>
            </form>
            <button onClick={this.props.addItem}>add to list</button>
            {view}
        </div>   
        )   
    }
}

export default ChangeCurrency;






{/* <button onClick={addItem}>add transaction</button>
                <div>
                    {validationNameError ? <ValidationNameError/>: null}
                    {validationAmountError ? <ValidationAmountError/> : null}
                </div> */}