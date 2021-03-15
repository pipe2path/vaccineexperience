import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';


const feedsReducer = (state = [], action) => {
    if (action.type === 'FETCH_FEED'){
        return action.payload;
    }
    return state;
};

const citiesReducer = (state = [], action) => {
    if (action.type === 'FETCH_CITIES') {
        return action.payload;
    }
    return state;
}


const selectedCityReducer = (selectedCity = null, action) => {
    if (action.type === 'CITY_SELECTED') {
        return action.payload;
    }
    return selectedCity;
}

export default combineReducers({
    feeds: feedsReducer,
    cities: citiesReducer,
    selectedCity: selectedCityReducer,
    form: formReducer
})