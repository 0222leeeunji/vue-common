'use strict';

import Vue from 'vue'
import resInfoValue from '../value/resInfoValue'

/**
 * 예약상태 코드에 대한 상태명 필터
 * @param {resState}
 * @return {string}
 */
Vue.filter('resStateName', (resState) => {
    return resInfoValue.resStateArr.find(t => {
        return t.type === resState;
    }).name;
});

/**
 * 결제상태 코드에 대한 상태명 필터
 * @param {paymentState}
 * @return {string}
 */
Vue.filter('paymentStateName', (paymentState) => {
    return resInfoValue.paymentStateArr.find(t => {
        return t.type === paymentState;
    }).name;
});

/**
 * 결제수단 타입에 대한 타입명 필터
 * @param {paymentMethodType}
 * @return {string}
 */
Vue.filter('paymentMethodTypeName', (paymentMethodType) => {
    const type = resInfoValue.paymentMethodTypeArr.find(t => {
        return t.type === paymentMethodType;
    });

    return type ? type.name : '';
});