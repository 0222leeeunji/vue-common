'use strict';

import Vue from 'vue'
import dateLib from '@/commons/lib/dateLib'
import strLib from '@/commons/lib/strLib'

/**
 * 숫자 천단위마다 콤마찍기
 * @param {string} input 금액
 * @return {string} 콤마찍힌 금액
 */
Vue.filter('numFilter', function (input) {
    if(input == undefined) return "";

    input = input.toString().replace(/[^0-9]/g,'');

    return input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

/**
 * 날짜 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('dateFilter', function (d, f) {
    if(strLib.getAgentInfo() == 'Safari' || strLib.getAgentInfo() == 'iPhone')
    {
        return dateLib.format(dateLib.toCompatibilityByDate(d),f)
    }
    return dateLib.format(d,f)

})

/**
 * 시간 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
Vue.filter('timeFilter', function (d, f) {
    let date = new Date();
    date.setHours(parseInt(d/100))
    date.setMinutes(d%100)

    return dateLib.format(date,f)
})

/**
 * 전화번호 '-' 표시 , X 표시
 * @param {num} num 전화번호
 * @param {num} type X 표시여부
 * @return {string} formatNum 포맷된 전화번호
 */
Vue.filter('tellFilter', function(num, type) {

    var formatNum = '';

    if (num == undefined) return

    if(num.length==11){
        if(type==0){
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
        }else{
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }
    }else if(num.length==8){
        formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
    }else{
        if(num.indexOf('02')==0){
            if(type==0){
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
            }else{
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        }else{
            if(type==0){
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
            }else{
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
    switch(weekType) {
        case 'SUN' : return "일";
        case 'MON' : return "월";
        case 'TUES' : return "화";
        case 'WEDNES' : return "수";
        case 'THRUS' : return "목";
        case 'FRI' : return "금";
        case 'SATUR' : return "토";
    }
});
