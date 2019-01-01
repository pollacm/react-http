import axios from 'axios';

//creates an instance of axios, a copy of the axios object
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//overriding other pieces
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//Could also add interceptors the same as we did before...
instance.interceptors.request.use(request => {
    console.log('FROM INSTANCE: ', request);
    //Edit request config
    return request;
}, error => {
    console.log('FROM INSTANCE: ', error);
    return Promise.reject('FROM INSTANCE ERROR: ' + error);
});

export default instance;