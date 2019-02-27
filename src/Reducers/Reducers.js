const initialState = {
    counter: 0,
    results: []
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newSate = Object.assign({}, state);
            newSate.counter = state.counter + 1;
            return newSate;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUB_COUNTER':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.removeById)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
};

export default CounterReducer;