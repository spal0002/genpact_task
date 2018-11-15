import * as actionDispatch from './actionDispatch';
import * as services from '../services';


export const loadDropdownData = () => {
    let devices = services.getDropdownData();
    return dispatch => {
        dispatch(actionDispatch.onLoadDevices(devices));
    }

}
