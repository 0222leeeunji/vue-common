'use strict';

import Vue from 'vue'
import strLib from "../../lib/strLib";
import paymentRegularContState from "../../../model/payment/regular/type/paymentRegularContState";

const weekNameForRp = ['일', '월', '화', '수', '목', '금', '토'];

/**
 * 결제주기
 * @param paymentManualCont 정기결제 승인요청 데이터
 * @return {string} 결제주기
 */
Vue.filter('periodDate', function (paymentRegularCont) {
    if(paymentRegularCont == null)
        return '';

    return paymentRegularCont.attr.periodDateType === 'MONTH' ?
        `매월 ${paymentRegularCont.attr.periodDateVal}일` :
        `매주 ${weekNameForRp[paymentRegularCont.attr.periodDateVal]}요일`;
});


/**
 * 정기결제 승인요청 상태
 */
Vue.filter('paymentRegularContStateName', function (type) {
    if (strLib.isNull(type))
        return "";

    return paymentRegularContState[type]||'';
});
