import React, { Component } from 'react';
import { Provider } from 'react-redux';
import genpactStore from './store';
import Aux from './hoc/aux';
import Home from './home/index';

class AmpleApp extends Component {
    render() {
        return (
            <Provider store={genpactStore}>
                <Aux>
                    <Home />
                </Aux>
            </Provider>
        );
    }
}
export default AmpleApp;

