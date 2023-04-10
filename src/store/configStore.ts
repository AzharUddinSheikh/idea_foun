import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import rootReducer  from './reducer';


export default function () {
    return configureStore({
        reducer:rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api)
    })
}
