import * as actionTypes from '../actions/actionTypes';

const intialState = {
    options: []   
}
const dropdownReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOAD_OPTIONS:
            return {
                ...currentState,
                options: action.options
            }
            
        default:
            return currentState
    }
}

export default dropdownReducer;