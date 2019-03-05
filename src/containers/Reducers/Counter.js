import * as actionTypes from '../../Store/Actions';

const initialState = {
    counter: 0,
    results: []
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newSate = Object.assign({}, state);
            newSate.counter = state.counter + 1;
            return newSate;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state;
    }
};

export default CounterReducer;