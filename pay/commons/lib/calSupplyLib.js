'use strict';

/**
 * 파일 lib
 */
export default {

    /**
     * 공급가 계산
     * @param price 금액
     */
    calcSupply(price) {
        return Math.ceil(price / 1.1);
    },

    /**
     * 부가세 계산
     * @param price 금액
     */
    calcVat(price) {
        return price - this.calcSupply(price);
    }
}
