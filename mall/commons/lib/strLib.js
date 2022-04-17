'use strict';

import Vue from 'vue';

/**
 * string 라이브러리
 */
export default {
  /**
   * isNotNull
   * @param data
   * @returns {boolean|boolean}
   */
  isNotNull(data) {
    return (data !== null && data !== 'null' && data !== undefined && data !== '')
  },

  /**
   * isNull
   * @param data
   * @returns {boolean}
   */
  isNull(data) {
    return (data === null || data === 'null' || data === undefined || data === '')
  },

  /**
   * 콤마 삭제
   * @param {string} data
   * @returns {string}
   */
  setDelComma(data) {
    return data.toString().replace(/[^0-9]/g, '');
  },

  /**
   * 핸드폰, 전화번호 유효성 체크
   * @param {string} p 핸드폰 번호
   */
  isCellPhone(p) {
    var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

    return !regExp.test(p) ? false : true;
  },

  /**
   * 숫자인지 여부
   * @param v
   * @returns {boolean}
   */
  isNum(v) {
    var regNumber = /^[0-9]+$/gi;

    return regNumber.test(v);
  },

  /**
   * 특수문자 있는지 여부
   * @param str
   * @returns {boolean}
   */
  isSpecial(str) {
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    return special_pattern.test(str);
  },

  /**
   * 유효성 체크
   * @param type
   * @param value
   * @param message
   * @returns {boolean}
   */
  regExpTest(type, value, message) {

    var regExp = '';
    switch (type) {
      case ('MOBILE') :
        regExp = /^\d{3}-\d{3,4}-\d{4}$/;
        break;
      case ('MOBILE2') :
        regExp = /(01[016789])(\d{4}|\d{3})\d{4}$/g;
        break;
      case ('HANGUL') :
        regExp = /[가-힣]/;
        break;
      case ('EMPTY') :
        regExp = /\s/g;
        break;
      case ('NUM') :
        regExp = /^[0-9]+$/;
        break;
      case ('EMAIL') :
        regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        break;
      case ('ID') :
        regExp = /^[a-zA-Z]+[a-zA-Z0-9]{3,30}$/g;
        break;
      case ('PASSWD') :
        regExp = /^.*(?=.{8,30})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
        break;
      case ('URL') :
        regExp = /^http[s]?\:\/\//i;
        break;
    }

    if (!regExp.test(value) || value == undefined) {
      if (message != null) Vue.bus.emit('showAlert', 'alert', message);
      return false;
    }
    else
      return true;

  },

  /**
   * 쿠키 생성
   * @param cName
   * @param cValue
   * @param cDay
   */
  setCookie(cName, cValue, cDay, domain) {
    var date = new Date();
    date.setTime(date.getTime() + cDay * 60 * 60 * 24 * 1000);
    if (domain) document.cookie = cName + '=' + escape(cValue) + ';domain=' + domain + ';expires=' + date.toUTCString() + ';path=/';
    else document.cookie = cName + '=' + escape(cValue) + ';expires=' + date.toUTCString() + ';path=/';
  },

  /**
   * 쿠키 가저오기
   * @param cName
   * @returns {*}
   */
  getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if (start != -1) {
      start += cName.length;
      var end = cookieData.indexOf(';', start);
      if (end == -1) end = cookieData.length;
      cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
  },

  /**
   * 숫자만 리턴
   * @param v
   */
  onlyNum(v) {
    return v.replace(/[^0-9]/g, "");
  },

  /**
   * 콤마 찍기
   * @param input
   * @returns {string}
   */
  setComma(input) {
    if (input == undefined) return "";

    input = input.toString().replace(/[^0-9]/g, '');

    return input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  /**
   * 타이머
   * @returns {{comSecond: string, fnCallback: function(), timer: string, domId: string, fnTimer: function(), fnStop: function()}}
   */
  timer() {
    return {
      comSecond: "",
      fnCallback: () => {
      },
      timer: "",
      domId: "",
      fnTimer: () => {
        const m = Math.floor(this.comSecond / 60) + " " + (this.comSecond % 60) + "";	// 남은 시간 계산
        this.comSecond--;					// 1초씩 감소
        this.domId.innerText = m;
        if (this.comSecond < 0) {			// 시간이 종료 되었으면..
          clearInterval(this.timer);		// 타이머 해제
          alert("인증시간이 초과하였습니다. 다시 인증해주시기 바랍니다.")
        }
      },
      fnStop: () => {

      }
    }
  },

  /**
   * 바이트계산
   * @param val 입력문자
   * @returns {string}
   */
  getBytes(val) {
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
   * 모바일 종류 가져오기
   * @returns {string}
   */
  mobileOs() {
    const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.match('android') != null) {
      return 'ANDROID'
    } else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
      return 'IOS'
    } else {
      return ''
    }
  },

  makeQueryString(data) {
    let queryParam = '';
    Object.keys(data).forEach(key => {
      const value = data[key];

      if (value) {
        if (queryParam === '')
          queryParam += '?';
        else
          queryParam += '&';

        queryParam += (key + '=' + data[key]);
      }
    });

    return queryParam;
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
   * 제한 길이 자르기
   * @param str
   * @param maxByte
   * @returns {string}
   */
  cutByLen(str, maxByte) {
    var b = 0
    var c;
    var i = 0;

    for (i = 0; c = str.charCodeAt(i);) {
      b += c >> 7 ? 2 : 1

      if (b > maxByte) break;
      i++;
    }

    return str.substring(0, i);
  },

  /**
   * 중복 객체 삭제 배열 리턴
   * @param arr 비교 배열
   * @param key 비교 key
   */
  trim(arr, key) {
    var values = {};
    return arr.filter(function (item) {
      var val = item[key];
      var exists = values[val];
      values[val] = true;
      return !exists;
    });
  },
}
