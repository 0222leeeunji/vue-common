'use strict';

/**
 * 수 계산 관련 lib
 */
export default {

    /**
     * number 의 퍼센트는 몇인지 구함
     * @param {number} number
     * @param {number} percent
     */
    calPercent(number, percent) {
        if(isNaN(number) || isNaN(percent))
            return 0

        //percent 를 실수로 변환. ex) 15 = 0.15
        //100을 곱하기 다시 나누는건 실수 계산시에 부동소수점으로 인한 부정확한 값을 방지.
        const operand = parseInt((0.01 * percent) * 100) / 100;

        //최종적으로 100의 15퍼센트이면 100 * 0.15 -> 15
        return Math.ceil(number * operand);
    }

}
