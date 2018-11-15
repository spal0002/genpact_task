import { combineReducers } from 'redux';
import dropdownReducer from '../reducers/dropdownReducer';;

const genpactReducer = combineReducers({
    dropdownData: dropdownReducer
});

export default genpactReducer;