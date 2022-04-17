'use strict';

import axios from 'axios';
import notificationLib from './lib/element-ui/notificationLib';
import store from '../store/index';
import environment from "./environment";
import blobObjectLib from "./lib/blobObjectLib";

//axios header accessToken 세팅
if (localStorage.getItem('accessToken'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

const apiUrl = environment.apiUrl;

const basicConfig = {
    headers : {
        "content-type" : "application/json"
    }
};

export const multipartConfig = {
    headers : {
        "content-type" : "multipart/form-data"
    }
};

export const formUrlEncodedConfig = {
    headers : {
        "content-type" : "application/x-www-form-urlencoded"
    }
};

/**
 * 통신 sv
 */
export default {
    handler : (response, successFunc, failFunc) => {
        store.commit('hideLoader');
        //success가 undefined이면 따로 SeApiResult에 담지않고 데이터를 바로 보낸 케이스.
        if (response.data.success === undefined || response.data.success === true || response.data.success === 'Y') {
            if (successFunc)
                successFunc(response);
            else
                notificationLib.success(response.data.message);
        } else {
            if (failFunc)
                failFunc(response);
            else
                notificationLib.fail(response.data.message);
        }
    },
    errorHandler : (error, errorFunc) => {
        store.commit('hideLoader');
        if(error.response) {
            if(error.response.status === 401) {
                location.href = "/login";
            } else if(error.response.status === 400 && error.response.data.errCode) {
                notificationLib.error(error.response.data.message);
            }
        }

        if(errorFunc) {
            errorFunc(error);
        } else {
            if (error.response) {
                notificationLib.error(error.response.status);
            } else {
                notificationLib.error(error);
            }
        }
    },
    get(url, successFunc, failFunc, errorFunc, config) {
        config = config || basicConfig;
        axios.get(apiUrl + url, config)
            .then(response => this.handler(response, successFunc, failFunc))
            .catch(error => this.errorHandler(error, errorFunc));
    },
    post(url, data, successFunc, failFunc, errorFunc, config) {
        config = config || basicConfig;
        axios.post(apiUrl + url, data, config)
            .then(response => this.handler(response, successFunc, failFunc))
            .catch(error => this.errorHandler(error, errorFunc));
    },
    put(url, data, successFunc, failFunc, errorFunc, config) {
        config = config || basicConfig;
        axios.put(apiUrl + url, data, config)
            .then(response => this.handler(response, successFunc, failFunc))
            .catch(error => this.errorHandler(error, errorFunc));

    },
    delete(url, successFunc, failFunc, errorFunc, config) {
        config = config || basicConfig;
        axios.delete(apiUrl + url, config)
            .then(response => this.handler(response, successFunc, failFunc))
            .catch(error => this.errorHandler(error, errorFunc));
    },
    patch(url, data, successFunc, failFunc, errorFunc, config) {
        config = config || basicConfig;
        axios.patch(apiUrl + url, data, config)
            .then(response => this.handler(response, successFunc, failFunc))
            .catch(error => this.errorHandler(error, errorFunc));

    },
    fileDown(url, filename) {
        axios.get(apiUrl + url, {responseType : 'blob'}).then(response => {
            blobObjectLib.downBlob(new Blob([response.data], { type: response.headers['content-type'] }), filename);
        }).catch(error => this.errorHandler(error));
    }

}
