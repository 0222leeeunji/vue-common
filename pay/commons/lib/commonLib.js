'use strict';

import strLib from '../lib/strLib'

/**
 * 공통 Sv
 */
export default {

    /**
     * 내림차순 정렬
     * @param list
     * @param field
     */
    sorting(list, field) {
        list.sort(function (a, b) {
            return b[field] - a[field];
        });
    },

    /**
     * 한글을 2바이트 씩 계산하여 입력받은 문자열이 DB에 저장될 때 총 몇바이트를 차지하는지 계산한다.
     * 엔터(\r\n)는 2바이트를 차지한다.
     * @param val : 입력받은 문자열
     */
    getByteLength(val) {
        // 입력받은 문자열을 escape() 를 이용하여 변환한다.
        // 변환한 문자열 중 유니코드(한글 등)는 공통적으로 %uxxxx로 변환된다.
        var temp_estr = escape(val);
        var s_index = 0;
        var e_index = 0;
        var temp_str = '';
        var cnt = 0;

        // 문자열 중에서 유니코드를 찾아 제거하면서 갯수를 센다.
        while ((e_index = temp_estr.indexOf('%u', s_index)) >= 0)  // 제거할 문자열이 존재한다면
        {
            temp_str += temp_estr.substring(s_index, e_index);
            s_index = e_index + 6;
            cnt++;
        }

        temp_str += temp_estr.substring(s_index);

        temp_str = unescape(temp_str);  // 원래 문자열로 바꾼다.

        // 유니코드는 2바이트 씩 계산하고 나머지는 1바이트씩 계산한다.
        return ((cnt * 2) + temp_str.length) + '';
    },

    /**
     * 제한 길이 자르기
     * @param str
     * @param maxByte
     * @returns {string}
     */
    cutByLen(str, maxByte) {
        var b = 0
        var c ;
        var i = 0;

        for(i=0; c=str.charCodeAt(i);) {
            b += c >> 7 ? 2 : 1

            if (b > maxByte) break;
            i++;
        }

        return str.substring(0,i);
    },

    debounce(callback, milliseconds) {
        const makeFunc = () => {
            let debounceCheck;

            return () => {
                clearTimeout(debounceCheck);
                debounceCheck = setTimeout(() => {
                    callback();
                }, milliseconds);
            }
        };

        return makeFunc();
    },




}
