'use strict';

import Vue from 'vue'
import strLib from "../../lib/strLib";
import paymentManualState from "../../../model/payment/manual/type/paymentManualState";
import paymentManualAuthType from "../../../model/payment/manual/type/paymentManualAuthType";
import dateLib from "../../lib/dateLib";

/**
 * 등록결제 등록요청 상태
 */
Vue.filter('paymentManualStateName', function (type) {
    if (strLib.isNull(type))
        return "";

    return paymentManualState[type]||'';
});

/**
 * 등록결제 인증 타입 (결제구분)
 */
Vue.filter('paymentManualAuthTypeName', function (type) {
    if (strLib.isNull(type))
        return "등록안됨";

    return paymentManualAuthType[type]||'';
});


/**
 * 등록결제 인증 타입 (결제구분)
 */
Vue.filter('paymentManualAuthTypeName', function (type) {
    if (strLib.isNull(type))
        return "등록안됨";

    return paymentManualAuthType[type]||'';
});

/**
 * 등록결제 승인요청 예상결제일
 * @param paymentManualCont 등록결제 승인요청 데이터
 * @return {string} 예상결제일
 */
Vue.filter('expectDate', function (paymentManualCont) {
    if(paymentManualCont == null || !paymentManualCont.attr.useExpectDate)
        return '';

    return paymentManualCont.attr.expectDateType === 'MONTH' ?
        `매월 ${paymentManualCont.attr.expectDateVal}일` :
        `매주 ${dateLib.weekName([paymentManualCont.attr.expectDateVal - 1])}요일`;
});
