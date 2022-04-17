'use strict';

import Vue from 'vue'
import dateLib from '@/commons/lib/dateLib'
import strLib from "@/commons/lib/strLib";
import commonValue from "../value/commonValue";

/**
 * 숫자 천단위마다 콤마찍기
 * @param {string} input 금액
 * @return {string} 콤마찍힌 금액
 */
Vue.filter('numFilter', function (input) {
  if (strLib.isNull(input) || isNaN(input)) return 0;
  let mi = input.toString().indexOf("-") == 0 ? '-' : ''
  input = input.toString().replace(/[^0-9]/g, '');
  return mi + input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

/**
 * 날짜 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('dateFilter', function (d, f) {
  return dateLib.format(d, f)
})

/**
 * 날짜 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('dateFilter2', function (d, f) {
  return moment(d).for(f)
})

/**
 * 문자열 날짜 > 날짜 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('dateTextFilter', function (d, f) {
  return dateLib.setDateText(d, f)
})

/**
 * 전화번호 '-' 표시 , X 표시
 * @param {num} num 전화번호
 * @param {num} type X 표시여부
 * @return {string} formatNum 포맷된 전화번호
 */
Vue.filter('tellFilter', function (num, type) {

  var formatNum = '';

  if (num == undefined) return

  if (num.length == 11) {
    if (type == 0) {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
    } else {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
  } else if (num.length == 8) {
    formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else {
    if (num.indexOf('02') == 0) {
      if (type == 0) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
      } else {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      }
    } else {
      if (type == 0) {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
      } else {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      }
    }
  }
  return formatNum;
})

/**
 * 시간 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('timeFilter', function (d, f) {
  let date = new Date();
  date.setHours(parseInt(d / 100))
  date.setMinutes(d % 100)

  return dateLib.format(date, f)
})

/**
 * 소숫점
 */
Vue.filter('toFixedFilter', function (input, num) {
  return input.toFixed(num);
})


/**
 * 천단위 콤마 + 소숫점
 */
Vue.filter('numFixedFilter', function (input) {
  if (input == undefined) return "";

  input = input.toString().replace(/[^0-9.]/g, '');

  let reg = new RegExp(/(-?\d+)(\d{3})/);
  let strArr = input.split('.');
  while (reg.test(strArr[0])) {
    strArr[0] = strArr[0].replace(reg, "$1,$2");
  }
  if (input.indexOf(".", 0) > -1) {
    input = strArr[0] + "." + strArr[1];
  } else {
    input = strArr[0];
  }
  return input
})

/**
 * 결제 상태
 */
Vue.filter('chargingStateFilter', function (state) {
  return state !== undefined ? commonValue.chargingState[state] : '';
})
