import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:4050'
    baseURL: ' https://covid19-menezes-api.herokuapp.com/'
})