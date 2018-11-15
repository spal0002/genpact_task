import React, { Component } from 'react';
import '../assets/css/styles.css';
import Home from './homeContainer';
import * as services from '../services/index';
import Aux from '../hoc/aux';

class HomeComponent extends Component {

    state = {
        loggedIn:true
    }
    
    componentWillMount () {
       services.setLocalStorage();
    }


    render() {
        let content = null;
        if (this.state.loggedIn) {
            content = <Home />

        } else {
            content = "Login";
        }

        return (
            <Aux>
                {content}
            </Aux>
        );
    }
}
export default HomeComponent;