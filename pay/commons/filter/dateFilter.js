'use strict';

import Vue from 'vue'
import dateLib from '../lib/dateLib'
import strLib from '../lib/strLib'

/**
 * 날짜 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('dateFilter', function (d, f) {
    if (strLib.getAgentInfo() == 'Safari' || strLib.getAgentInfo() == 'iPhone') {
        return dateLib.format(dateLib.toCompatibilityByDate(d), f)
    }
    return dateLib.format(d, f)

});

/**
 * 요일 이름 구함
 * @param {number} week number
 * @return {string} 요일 이름
 */
Vue.filter('weekName', function (w) {
    if(w > 8 || w < 1)
        return '';

    return dateLib.weekNames[w] + '요일';
});