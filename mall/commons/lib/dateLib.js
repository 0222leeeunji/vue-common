'use strict';

import strLib from '@/commons/lib/strLib'

/**
 * 날짜 라이브러리
 */
export default {
  /**
   * 날짜 양식 변환
   * @param {Date} d 날짜
   * @param {string} f 양식
   * @return {string} 날짜 양식
   */
  format(d, f) {
    var d = new Date(d)
    var _addZero = n => {
      return n < 10 && n >= 0 ? '0' + n : '' + n;
    };

    if (!d.valueOf()) return "";

    var weekName = ['일', '월', '화', '수', '목', '금', '토'];
    var h;

    return f.replace(/(yyyy|yy|MM|dd|D|E|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear();
        case 'yy':
          return _addZero((d.getFullYear() % 1000));
        case 'MM':
          return _addZero(d.getMonth() + 1);
        case 'dd':
          return _addZero(d.getDate());
        case 'D':
          return d.getDate();
        case 'E':
          return weekName[d.getDay()];
        case 'HH':
          return _addZero(d.getHours());
        case 'hh':
          return _addZero(((h = d.getHours() % 12) ? h : 12));
        case 'mm':
          return _addZero(d.getMinutes());
        case 'ss':
          return _addZero(d.getSeconds());
        case 'a/p':
          return d.getHours() < 12 ? '오전' : '오후';
        default:
          return $1;
      }
    });
  },

  /**
   * 시작/종료날짜 셋팅
   * @param date
   * @returns {string}
   */
  setStartEndDate(d) {
    let sDate = this.format(d, 'yyyy-MM-01');
    let eDate = this.format(d, `yyyy-MM-${this.getLastDay(d)}`);

    return {
      startDate: sDate,
      endDate: eDate
    }

  },

  setDateText(str, f) {
    if (strLib.isNull(str)) return '';
    let date = new Date(str.substring(0, 4), str.substring(4, 6) - 1)
    return this.format(date, f)
  },

  /**
   * 0 붙이기
   * @param n
   * @returns {string}
   */
  addZero(n) {
    return n < 10 && n >= 0 ? '0' + n : '' + n;
  },

  /**
   * 날짜 포맷 형식 바꾸기 ?
   * @param date
   * @returns {string}
   */
  toCompatibilityByDate(date) {
    let dateString = JSON.stringify(date);
    dateString = dateString.replace(/ /g, "T")
    dateString = dateString.replace(/\"/g, "")

    return dateString.split(".")[0];

  },

  /**
   * 주단위 설정
   * @param date
   * @param weekCnt
   * @returns {*|void|number}
   */
  setWeek(date, weekCnt) {
    return date.setDate(date.getDate() - weekCnt);
  },

  /**
   * 월단위 설정
   * @param date
   * @param monthCnt
   * @returns {*|number}
   */
  setMonth(date, monthCnt) {
    return date.setMonth(date.getMonth() - monthCnt);
  },

  /**
   * 해당 날짜의 마지막 일 구하기
   * @param d
   * @returns {number}
   */
  getLastDay(d) {
    let date = new Date(d)

    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
}
