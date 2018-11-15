import React from 'react'; 
import {  Dropdown } from 'office-ui-fabric-react';

const MultiSelectDropdown = (props) => {
    return <Dropdown
        placeHolder={props.dropdownOptions.placeHolder}
        label={props.dropdownOptions.label}
        defaultSelectedKeys={props.defaultSeletedOptions}
        onChange={props.handleChange}
        multiSelect = {props.dropdownOptions.multiSelect}
        options={props.dropdownOptions.options}
    />
}

export default MultiSelectDropdown;