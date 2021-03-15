import feed from '../apis/feeds';
import history from '../history';

export const selectCity = (city) => async dispatch => {
    return { type: 'CITY_SELECTED', payload: city };
};

export const fetchFeed = (city) => async dispatch => {
    let response = null;
    if (!city){
        response = await feed.get('/posts');
    } else {
        response = await feed.get('/posts/city/' + city.cityId);
    }
        
    dispatch({ type: 'FETCH_FEED', payload: response.data })
};

export const fetchCities = () => async dispatch => {
    const response = await feed.get('./cities');

    dispatch({ type: 'FETCH_CITIES', payload: response.data })
}

export const createPost = formValues => async dispatch => {
    //console.log(formValues);
    const response = await feed.post('/posts', formValues);
    dispatch({ type: 'CREATE_POST', payload: response.data });
    history.push('/')
};
