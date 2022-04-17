'use strict';

import strLib from './strLib'
import vue from 'vue'

/**
 *  날짜 라이브러리
 */
export default {

    /**
     * 날짜 양식 변환
     * @param {Date} d 날짜
     * @param {string} f 양식
     * @return {string} 날짜 양식
     */
    format(d, f) {
        d = new Date(d);

        const _addZero = n => {
            return n < 10 && n >= 0 ? '0' + n : '' + n;
        };

        if (!d.valueOf()) return " ";

        const weekName = ['일', '월', '화', '수', '목', '금', '토'];
        let h;

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
     * 0 붙이기
     * @param n
     * @returns {string}
     */
    addZero(n) {
        return n < 10 && n >= 0 ? '0' + n : '' + n;
    },

    /**
     * 오늘날짜가 사이날짜인지 여부 , 날짜없으면 true 반환
     * @param dates
     * @returns {boolean}
     */
    isBetweenDate(dates) {
        if (dates == undefined || (strLib.isNull(dates.startDate) && strLib.isNull(dates.endDate))) return true

        let currDate = new Date().getTime()

        const startDate = this.toCompatibilityByDate(dates.startDate)
        const endDate = this.toCompatibilityByDate(dates.endDate)
        let sDate = new Date(startDate).getTime()
        let eDate = new Date(endDate).getTime()

        if (currDate > sDate && currDate < eDate) return true
        else return false
    },


    /**
     * 두 날짜 차이 계산
     * @param _date1
     * @param _date2
     * @returns {number}
     */
    dateByDayDiff(_date1, _date2) {
        var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
        var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

        diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
        diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());

        var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
        diff = Math.ceil(diff / (1000 * 3600 * 24));

        return diff;
    },

    /**
     * 날짜 포맷 형식 바꾸기 ?
     * @param date
     * @returns {string}
     */
    toCompatibilityByDate (date){
        let str = "";

        let dateString = JSON.stringify(date);

        if(dateString != null && dateString != undefined){
            dateString = dateString.replace (/ /g, "T")
            dateString = dateString.replace (/\"/g,"")
            str = dateString.split(".")[0];
        }

        return str;
    },

    /**
     * 현재 날짜 구함
     * @param format 포맷
     * @return {string} 날짜
     */
    today(format) {
        return vue.moment().format(format ? format : 'YYYY-MM-DD');
    },

    /**
     * from ~ to 사이의 날짜들을 해당 format으로 array에 담아 반환
     * @param fromDate 시작날짜
     * @param toDate 종료날짜
     * @param format 포맷
     * @return {array} 날짜 리스트
     */
    getDiffDates(fromDate, toDate, format) {
        const dates = [];

        if(fromDate > toDate)
            return dates;
        
        let dateFormatString = vue.moment(fromDate).format(format);

        while(fromDate <= toDate) {
            dates.push(dateFormatString);
            fromDate.setDate(fromDate.getDate() + 1);
            dateFormatString = vue.moment(fromDate).format(format);
        }

        return dates;

    }

}
