'use strict';

import axios from 'axios'
import elementSv from "@/commons/sv/elementSv";
import envSv from "./envSv";

// 공통 apiUrl
const apiUrl = envSv.apiUrl;

const imageApiUrl = envSv.imageApiUrl;

// 설정
let config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  }
}

/**
 * 통신 sv
 */
export default {
  get(url) {
    return this.ajax('GET', apiUrl + url)
  },

  delete(url, data) {
    return this.ajax('DELETE', apiUrl + url, data)
  },

  post(url, data) {
    return this.ajax('POST', apiUrl + url, data)
  },

  put(url, data) {
    return this.ajax('PUT', apiUrl + url, data)
  },

  upload(url, data) {
    return this.ajax('POST', imageApiUrl + url, data)
  },

  output(url) {
    return this.ajax('GET', imageApiUrl + url)
  },

  /**
   * 통신 성공 핸들러
   * @param response
   * @param resolve
   * @param reject
   */
  successHandler(response, resolve, reject) {
    // if (!response.data.success && response.data.message) {
    //   alert(response.data.message)
    // }
    if (response.data.success) resolve(response);
    else reject(response)
  },

  /**
   * 통신 실패 핸들러
   * @param error
   */
  errorHandler(error) {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('sellerToken');
        location.href = "/";
      }
    }
  },

  /**
   * 통신 실행
   * @param {string} method http메소드
   * @param {string} url 경로
   * @param {object} data 바디 데이터
   * @param {object} cusConfig 설정
   * @returns {Promise<unknown>}
   */
  ajax(method, url, data, cusConfig) {
    if(cusConfig) config = cusConfig;

    if(localStorage.getItem('sellerToken'))
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('sellerToken');

    if ('GET' === method) {
      return new Promise((resolve, reject) => {
        axios.get(url, config)
          .then((response) => {
            this.successHandler(response, resolve, reject);
          })
          .catch(error => {
            this.errorHandler(error)
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        axios[method.toLowerCase()](url, data, config)
          .then((response) => {
            this.successHandler(response, resolve, reject);
          })
          .catch(error => {
            this.errorHandler(error)
        })
      })
    }
  },

  login(loginData) {
    const headers = {
      "content-type" : "application/x-www-form-urlencoded",
      "Authorization" : "Basic " + btoa(envSv.clientID+":"+envSv.clientPw)
    };

    const params =
      "grant_type=password" +
      "&scope=read" +
      "&client_id="+envSv.clientID+
      "&username="+loginData.id+
      "&password="+loginData.passwd;

    return axios.post(envSv.loginUrl, params, {headers : headers})
  },

  logout(){ //로그아웃
    localStorage.removeItem("sellerToken");
    location.href = '/';
  },
}
