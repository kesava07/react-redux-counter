import * as actionTypes from '../Actions/ActionTypes';
import { updatedObject } from '../Utility';

const initialState = {
    counter: 0
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: return updatedObject(state, { counter: state.counter + 1 });
        case actionTypes.DECREMENT: return updatedObject(state, { counter: state.counter - 1 });
        case actionTypes.ADD_COUNTER: return updatedObject(state, { counter: state.counter + action.value });
        case actionTypes.SUB_COUNTER: return updatedObject(state, { counter: state.counter - action.value });
        default: return state;
    }
};

export default CounterReducer;