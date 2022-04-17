import Vue from "vue";

import orderValue from "@/commons/value/orderValue";

/**
 * 결제 상태
 */
Vue.filter('payStateFilter', function (state) {
  return state !== undefined ? orderValue.payState[state] : '';
})
