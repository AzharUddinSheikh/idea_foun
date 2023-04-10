import { Middleware } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from './apiCallAction'


const api : Middleware = ({ dispatch }) => next => async (action) => {
    if (action.type !== actions.apiCallBegan.type)
        return next(action);

    next(action)
    const {url, method, data, onSuccess} = action.payload;
    try {
        const response = await axios.request({
            baseURL: 'https://jsonplaceholder.typicode.com',
            url : url,
            method : method,
            data : data
        });
        dispatch({type: onSuccess, payload: response.data})
    } catch (error) {
        // handle error depends upon status code
        console.log('something went wrong')
    }
}

export default api;