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


/* Export Component ==================================================================== */
export default API;
