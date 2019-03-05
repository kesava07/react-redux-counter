import * as actionTypes from '../../Store/Actions';

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.removeById)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
};

export default resultReducer;