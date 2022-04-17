'use strict';

import axios from 'axios'
import notificationSv from '../sv/notificationSv'
import store from '../../store/index'
import environment from "@/commons/environment";

//axios header accessToken 세팅
if (localStorage.getItem('accessToken'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

//현재 요청중인 post url을 담을 obj (2번 이상 요청하는것을 막기위해 사용)
const requestingPostUrl = {};

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
    handler : (response, successFunc, failFunc, url) => {
        if(store.getters.isShowLoader)
            store.commit('hideLoader');

        //요청중인 url에서 삭제
        if(url)
            delete requestingPostUrl[url];

        if (response.data.success) {
            if (successFunc)
                successFunc(response);
            else
                notificationSv.success(response.data.message);
        } else {
            if (failFunc)
                failFunc(response);
            else
                notificationSv.fail(response.data.message);
        }
    },
    errorHandler : (error, errorFunc, url) => {
        if(store.getters.isShowLoader)
            store.commit('hideLoader');

        // 회원 계정 사용불가에 해당하는 에러인지 체크.
        if (error.response) {
            console.log(error.response);
            if (typeof error.response.data === 'object' && error.response.data['user-noActive']) {
                localStorage.clear();
                location.href = "/login?userActiveFalse=true";
                return;
            }
        }

        //요청중인 url에서 삭제
        if(url)
            delete requestingPostUrl[url];
        
        if(errorFunc) {
            errorFunc(error);
        } else {
            if (error.response)
                notificationSv.error(error.response.status);
            else
                notificationSv.error(error);
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

        //이미 같은 url로 post 요청중이면 요청안함.
        if(requestingPostUrl[url])
            return;

        requestingPostUrl[url] = true;
        axios.post(apiUrl + url, data, config)
            .then(response => this.handler(response, successFunc, failFunc, url))
            .catch(error => this.errorHandler(error, errorFunc, url));
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
    }

}
