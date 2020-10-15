import ApiManager from './ApiManager'
import Endpoint from './Endpoint'

import { Env } from '@constant/';

import _ from 'lodash';
import { sprintf } from 'sprintf-js'

/**
 * Init API
 */
const API = ApiManager.getInstance(Env.test) // Init with test env by default. 
/**
 * Auth API
 */
API.login = (params) => {
    const { username, password } = params
    const data = {
        username,
        password
    };

    return API.instance.get(Endpoint.LOGIN, data);
};

API.getProductList = (params)=>{
    return API.instance.get(Endpoint.products, params);
}

API.getProductTypes =() =>{
    return API.instance.get(Endpoint.productTypes);
} 

API.getPrices = () => {
    return API.instance.get(Endpoint.price);
}
API.getProviders = () => {
    return API.instance.get(Endpoint.providers);
}

/* Export Component ==================================================================== */
export default API;
