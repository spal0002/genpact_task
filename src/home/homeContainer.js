import React, { Component } from 'react';
import '../assets/css/styles.css';
import HeaderComponent from '../header/headerComponent';
import FooterComponent from '../footer/footerComponent';
import { connect } from 'react-redux';
import Aux from '../hoc/aux';
import * as actionBuilder from "../actions/index";
import StatesComponent from '../states/components/states';
import CitiesComponent from '../states/components/cities';

class Home extends Component {
    
    componentDidMount(){
        this.props.loadDropdown()
    }
    
    render() {
        return (
            <Aux>
                <HeaderComponent />
                    <p className="text-center">Re-Useable Single and Multi Select Dropdown</p>
                    <div className="container">
                        <StatesComponent data={this.props.dropdownOptions} />
                        <CitiesComponent data={this.props.dropdownOptions} />
                    </div>
                <FooterComponent />
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      dropdownOptions: state.dropdownData.options
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        loadDropdown: () => dispatch(actionBuilder.loadDropdownData()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  