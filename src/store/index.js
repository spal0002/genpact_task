import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import genpactReducer from '../reducers';

const genpactStore = createStore(genpactReducer, applyMiddleware(thunk));

export default genpactStore;