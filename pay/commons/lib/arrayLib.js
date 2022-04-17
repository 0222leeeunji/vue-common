'use strict';

/**
 * array Lib
 */
export default {

    /**
     * 범위 내의 숫자들을 담은 array를 반환.
     * @param start 시작 number
     * @param end 종료 number
     * @param step 증가 값
     */
    range : (start, end, step = 1) => {
        const arr = [start];
        let sum = start;

        while(sum < end)
            arr.push(sum += step);

        return arr;
    },


}
