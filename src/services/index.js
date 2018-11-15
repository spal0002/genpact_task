import * as mockData from '../mockdata/dropdownData.json';
export const setLocalStorage = () => {
    if (localStorage.getItem('mockData') == null)
        setMockData(mockData);
}

const getMockData = () => {
    if (localStorage.getItem('mockData') != null){
        return JSON.parse(localStorage.getItem('mockData'));
    } else {
        setMockData(mockData);
        return JSON.parse(JSON.stringify(mockData))
    }
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
