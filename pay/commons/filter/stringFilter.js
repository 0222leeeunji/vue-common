'use strict';

import Vue from 'vue'
import strLib from '../lib/strLib'

/**
 * newLine(\n) -> <br/> replace
 * @param {string} str 문자열
 * @return {string} </br>로 변경된 문자열
 */
Vue.filter('newLine', function (input) {
    if (input == null) return "";

    return strLib.replaceHtmlCodeInStrToHtml('newLine', input);
});
