import * as actionTypes from './actionTypes';

export const onLoadDevices = (options) => {
    return {
        type: actionTypes.ON_LOAD_OPTIONS,
        options: options
    };
};