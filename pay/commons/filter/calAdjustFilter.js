'use strict';

import Vue from 'vue'

/**
 * 수수료 계산 (VAT 제외)
 * @param fee 수수료 (VAT 포함)
s * @return vat 제외된 수수료
 */
Vue.filter('calcSupplyFee', function (fee) {
    if(!fee || fee === 0)
        return 0;

    return Math.ceil(parseInt(fee * 100) / 1.1) / 100;
});
