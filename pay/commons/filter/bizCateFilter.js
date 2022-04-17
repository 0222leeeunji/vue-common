'use strict';

import Vue from 'vue'

/**
 * 업무 카테고리에 따른 customerNo 출력명
 */
Vue.filter('bizCateCustomerNo', function (bizCateStr) {
    return bizCateStr === 'HO' ? '차트번호' : '고객번호';
});

/**
 * 업무 카테고리에 따른 customerName 출력명
 */
Vue.filter('bizCateCustomerName', function (bizCateStr) {
    return bizCateStr === 'HO' ? '환자명' : '구매자명';
});

/**
 * 업무 카테고리에 따른 customer 출력명
 */
Vue.filter('bizCateCustomer', function (bizCateStr) {
    return bizCateStr === 'HO' ? '환자' : '구매자';
});

/**
 * 업무 카테고리에 따른 customerInfo 출력명
 */
Vue.filter('bizCateCustomerInfo', function (bizCateStr) {
    return bizCateStr === 'HO' ? '차트 정보' : '구매자 정보';
});




