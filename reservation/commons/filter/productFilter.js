'use strict';

import Vue from 'vue'
import productValue from '../value/ProductValue'

/**
 * 상품가격 적용구분 필터
 * @param {applyType}  ex) WEEKDAY, WEEKEND, DAILY, SPECIFIC
 * @return {string}
 */
Vue.filter('priceApplyType', (applyType) => {
    return productValue.priceApplyTypeArr.find(t => {
        return t.type === applyType;
    }).name;
});