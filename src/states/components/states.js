import React from 'react';
import MultiSelectDropdown from '../../hoc/multiSelectDropdownComponent';
import { DropdownMenuItemType } from 'office-ui-fabric-react';


const StatesComponent = (props) => {

    let stateOptions = [{ key: 'Header2', text: 'States', itemType: DropdownMenuItemType.Header }]

    if (props.data.length !== 0) {
        Object.keys(props.data[0]).map(function (item) {
            stateOptions.push({ key: item, text: item })
        })
    }
    
    let seletedOptions = stateOptions[0];

    const dropdownOptions = {
        "placeHolder": "Select State",
        "label": "Single-Select  Example:",
        "multiSelect": false,
        "options": stateOptions
    }

    const setStates = (evt, type) => {
        alert("We get the state selection from this event")
    }

    return (
        <div className="docs-DropdownExample">
            <MultiSelectDropdown id="slecte1" defaultSeletedOptions={seletedOptions} dropdownOptions={dropdownOptions} handleChange={(evt) => setStates(evt, 'States')} />
        </div>)
}
export default StatesComponent;