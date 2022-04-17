'use strict';

import strLib from '../lib/strLib'

/**
 * 공통 Sv
 */
export default {
    /**
     * 페이지 이동 path
     * @param {object} obj this
     * @param {string} path route명
     * @param {object} params 넘길데이터
     */
    goUrlToPath(obj, path, query) {
        query = query === undefined ? {} : query;
        obj.$router.push({path: path, query: query})
    },

    /**
     * 페이지 이동 name
     * @param {object} obj this
     * @param {string} path route명
     * @param {object} params 넘길데이터
     */
    goUrlToName(obj, name, params) {
        params = params === undefined ? {} : params;
        obj.$router.push({name: name, params: params})
    },

    /**
     * 얼럿
     * @param {object} obj this
     * @param {string} title 제목
     * @param {string} msg 내용
     */
    alert(obj, title, msg, type = 'primary', usehtml = false, callback) {
        obj.$alert(msg, title, {
            dangerouslyUseHTMLString: usehtml,
            confirmButtonText: '확인',
            type: type,
            callback: callback
        });
    },

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

    /**
     * 이미지 미리보기
     * @param imgFile 파일객체
     * @param img 이미지 DOM
     */
    imgPreview(imgFile, img) {
        const reader = new FileReader();

        reader.onload = () => {
            img.src = reader.result;
        };

        reader.readAsDataURL(imgFile);
    },

    /**
     * 이미지인지 체크
     * @param fileName 파일이름
     */
    isImgCheck(fileName) {
        // 확장자 체크
        if (!/\.(gif|jpg|jpeg|png)$/i.test(fileName)) {
            alert('이미지 파일만 선택해 주세요.\n\n현재 파일 : ' + fileName);
            return false;
        }

        return true;
    },

    /**
     * FormData null체크 append
     * @param formData
     * @param name
     * @param value
     */
    formDataAppend(formData, name, value) {
        if(strLib.isNotNull(value))
            formData.append(name, value);
    }

}
