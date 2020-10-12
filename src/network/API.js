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
API.login = (username, password) => {
    const data = {
        username: username,
        password: password
    };

    return API.instance.post(Endpoint.LOGIN, data);
};


/* Export Component ==================================================================== */
export default API;
