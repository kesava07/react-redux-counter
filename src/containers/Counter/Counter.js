import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';
import * as actionTypes from '../../Store/Actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.subCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>RESULT</button>
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
    ctr: state.ctr.counter,
    storedResult: state.res.results
});

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    decrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    addCounter: () => dispatch({ type: actionTypes.ADD_COUNTER, value: 10 }),
    subCounter: () => dispatch({ type: actionTypes.SUB_COUNTER, value: 15 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, removeById: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);