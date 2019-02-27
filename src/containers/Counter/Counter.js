import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        console.log(this.props.storedResult, "chenna")
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.subCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>RESULT</button>
                <ul>
                    {this.props.storedResult.map(srdResult =>
                        <li key={srdResult.id} onClick={() => this.props.onDeleteResult(srdResult.id)}>{srdResult.value}</li>
                    )}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ctr: state.counter,
    storedResult: state.results
});

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch({ type: "INCREMENT" }),
    decrementCounter: () => dispatch({ type: "DECREMENT" }),
    addCounter: () => dispatch({ type: "ADD_COUNTER", value: 10 }),
    subCounter: () => dispatch({ type: "SUB_COUNTER", value: 15 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", removeById: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);