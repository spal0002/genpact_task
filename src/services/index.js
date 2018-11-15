import * as mockData from '../mockdata/dropdownData.json';
export const setLocalStorage = () => {
    if (localStorage.getItem('mockData') == null)
        setMockData(mockData);
}

const getMockData = () => {
    return JSON.parse(localStorage.getItem('mockData'));
}

const setMockData = (mockData) => {
    localStorage.setItem('mockData', JSON.stringify(mockData));
}

export const getDropdownData = () => {
    let mockData = getMockData();
    return mockData.default.states;
}

export const getEquipementItems = (id) => {
    let mockData = getMockData();
    if(id){
        for (let i in mockData.devices) {
            if (mockData.devices[i].id === id) {
                return mockData.devices[i];
            }
        }
    } else return mockData.devices;
    
}
