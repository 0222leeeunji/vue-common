'use strict';

import Vue from 'vue'
import strLib from "../../lib/strLib";
import paySubMethodType from "../../../model/payment/type/paySubMethodType";
import paymentHostType from "../../../model/payment/type/paymentHostType";
import payOnOfflineType from "../../../model/payment/type/payOnOfflineType";
import payMethodType from "../../../model/payment/type/payMethodType";
import paymentCancelRequestState from "../../../model/payment/type/paymentCancelRequestState";
import remotePayRequestType from "../../../model/payment/type/remotePayRequestType";
import paymentRequestStateType from "../../../model/payment/type/paymentRequestStateType";

/**
 * 결제수단 부정보
 * @param board 게시글 데이터
 * @param boardCategories 게시판 유형 리스트
 * @return 게시판 상세유형 이름
 */

Vue.filter('paySubMethodName', function (paySubMethod) {
    if (strLib.isNull(paySubMethod))
        return "";

    return paySubMethodType[paySubMethod]||'';
});

/**
 * 결제 주체 타입
 */
Vue.filter('paymentHostTypeName', function (hostType) {
    if (strLib.isNull(hostType))
        return "";

    return paymentHostType[hostType]||'';
});

/**
 * 결제 구분 타입
 */
Vue.filter('payOnOfflineTypeName', function (onOfflineType) {
    if (strLib.isNull(onOfflineType))
        return "";

    return payOnOfflineType[onOfflineType]||'';
});

/**
 * 결제 수단
 */
Vue.filter('payMethodTypeName', function (type) {
    if (strLib.isNull(type))
        return "";

    return payMethodType[type]||'';
});

/**
 * 결제 취소 요청 상태
 */
Vue.filter('paymentCancelReqStateName', function (type) {
    if (strLib.isNull(type))
        return "";

    return paymentCancelRequestState[type]||'';
});

/**
 * 원격 결제 요청 타입
 */
Vue.filter('remotePayRequestTypeName', function (type) {
    if (strLib.isNull(type))
        return "";

    return remotePayRequestType[type]||'';
});

/**
 * 결제 요청 상태
 */
Vue.filter('paymentRequestStateTypeName', function (type) {
    if (strLib.isNull(type))
        return "";

    return paymentRequestStateType[type]||'';
});










