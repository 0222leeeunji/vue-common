'use strict';

import Vue from 'vue'
import dateLib from '../lib/dateLib'
import strLib from '../lib/strLib'

/**
 * 숫자 천단위마다 콤마찍기
 * @param {string} input 금액
 * @return {string} 콤마찍힌 금액
 */
Vue.filter('numFilter', function (input) {
    if (input == undefined) return "";

    input = input.toString().replace(/[^0-9]/g, '');

    return input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

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
});

/**
 * 전화번호 '-' 표시 , X 표시
 * @param {num} num 전화번호
 * @param {num} type X 표시여부
 * @return {string} formatNum 포맷된 전화번호
 */
Vue.filter('telFilter', function (num, type) {

    var formatNum = '';

    if (num == null) return;

    if (num.length === 11) {
        if (type === 0) {
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
        } else {
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }
    } else if (num.length === 8) {
        formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else {
        if (num.indexOf('02') === 0) {
            if (type == 0) {
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
            } else {
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        } else {
            if (type === 0) {
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
            } else {
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        }
    }
    return formatNum;
});

/**
 * 요일 타입에 대한 한글 요일명
 * @param {weekType} 요일타입 ex)SUN, MON, ... SATUR
 * @return {string} 요일타입에 대한 한글명
 */
Vue.filter('weekFilter', (weekType) => {
    switch (weekType) {
        case 'SUN' :
            return "일";
        case 'MON' :
            return "월";
        case 'TUES' :
            return "화";
        case 'WEDNES' :
            return "수";
        case 'THRUS' :
            return "목";
        case 'FRI' :
            return "금";
        case 'SATUR' :
            return "토";
    }
});

/**
 * 페이징 리스트 각 데이터 넘버
 * pagingDataNo
 * @param {listIndex} 데이터 리스트 인덱스
 * @param {pageData} 페이지 데이터
 * @return {number} 넘버
 */
Vue.filter('pagingDataNo', (listIndex, pageData) => {
    if(pageData == null || listIndex == null)
        return 0;

    return pageData.totalElements - ((pageData.number * pageData.size) + listIndex);
});