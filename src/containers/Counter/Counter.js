import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';
import * as actionCreaters from '../../Store/Actions/index';

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
    incrementCounter: () => dispatch(actionCreaters.increment()),
    decrementCounter: () => dispatch(actionCreaters.decrement()),
    addCounter: () => dispatch(actionCreaters.addCounter(10)),
    subCounter: () => dispatch(actionCreaters.subCounter(15)),
    onStoreResult: (result) => dispatch(actionCreaters.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreaters.deleteResult(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);