'use strict';

import Vue from 'vue'
import strLib from "@/commons/lib/strLib";
import nextDayWithdrawReqState from "@/model/adjust/type/nextDayWithdrawReqState";

/**
 * 익일정산 신청 상태
 */
Vue.filter('nextDayWithdrawProcessName', function (state) {
    if (strLib.isNull(state))
        return "";

    return nextDayWithdrawReqState[state]||'';
});





