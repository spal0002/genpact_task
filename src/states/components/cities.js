import React from 'react';
import MultiSelectDropdown from '../../hoc/multiSelectDropdownComponent';
import { DropdownMenuItemType } from 'office-ui-fabric-react';

const CitiesComponent = (props) => {
   
    let cityOptions = []

    if (props.data.length !== 0) {
        Object.keys(props.data[0]).map(function (item) {
            cityOptions.push({ key: item, text: item, itemType: DropdownMenuItemType.Header  })
            props.data[0][item].map((city) => {
                cityOptions.push({ key: city, text: city })
            })
        })
    }

    let seletedOptions = cityOptions[0];
    
    const dropdownOptions = {
        "placeHolder":"Select State",
        "label":"Multi-Select  Example:",
        "multiSelect":true,
        "options":cityOptions
    }

    const setCities = (evt, type) => {
        console.log(evt)
    }

    return (
        <div className="docs-DropdownExample">
             <MultiSelectDropdown id="slecte1"  defaultSeletedOptions={seletedOptions} dropdownOptions={dropdownOptions} handleChange={(evt) => setCities(evt, 'Cities')} />
        </div>
    )
}
export default CitiesComponent;