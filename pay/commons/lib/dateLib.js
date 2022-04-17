'use strict';

import strLib from './strLib'
import moment from 'moment/moment'

const weekNames = ['일', '월', '화', '수', '목', '금', '토'];

/**
 *  날짜 라이브러리
 */
export default {

    /**
     * 요일
     * @param day 0 ~ 6
     */
    weekName(day) {
        if(!day || day > 6 || day < 0)
            return '';

        return weekNames[day];
    },

    /**
     * 날짜 양식 변환
     * @param {Date} d 날짜
     * @param {string} f 양식
     * @return {string} 날짜 양식
     */
    format(d, f) {
        if(!(d instanceof Date))
            d = new Date(d);

        const _addZero = n => {
            return n < 10 && n >= 0 ? '0' + n : '' + n;
        };

        if (!d.valueOf()) return " ";
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
                    return weekNames[d.getDay()];
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
    today(format = 'YYYY-MM-DD') {
        return moment().format(format);
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
        
        let dateFormatString = moment(fromDate).format(format);

        while(fromDate <= toDate) {
            dates.push(dateFormatString);
            fromDate.setDate(fromDate.getDate() + 1);
            dateFormatString = moment(fromDate).format(format);
        }

        return dates;
    },

    /**
     * 해당 년도의 분기의 시작날짜, 종료날짜 구함
     * @param q 분기 (1,2,3,4)
     * @param year 분기를 구할 년도
     * @returns {{startDate: string, endDate: string}}
     */
    getQuarterDate(q, year) {
        const quarterStartDate = moment(year).quarter(q).format('YYYY-MM-01');
        const quarterEndDate = moment(year).quarter(q).endOf('month').add(2,'month').format('YYYY-MM-DD');

        return {
            startDate : quarterStartDate,
            endDate : quarterEndDate
        }
    },

    /**
     * 해당 년도의 상/하반기의 시작날짜, 종료날짜 구함
     * @param isFirst 상반기인지 여부
     * @param year 분기를 구할 년도
     * @returns {{startDate: string, endDate: string}}
     */
    getHalfDate(isFirst, year) {
        let quarter = isFirst ? 2 : 4;
        const halfEndDate = moment(year).quarter(quarter).endOf('month').add(2,'month').format('YYYY-MM-DD');
        const halfStartDate = moment(halfEndDate).add(-5, 'month').format('YYYY-MM-01');

        return {
            startDate : halfStartDate,
            endDate : halfEndDate
        }
    },

    /**
     * 날짜 string 을 date 객체로 변환
     * @param str 날짜 string
     * @param format string의 날짜 포맷
     */
    convertStrToDate(str, format) {
        return moment(str, format).toDate();
    },

    /**
     * 연도와 월에 해당하는 날짜 리스트 조회
     * @param year 연도
     * @param month 월
     */
    getDayOfMonths(year, month) {
        const date = new Date(year, month, 1);
        date.setDate(-1);

        const dayOfMonths = [];
        for (let i = 1; i <= date.getDate(); i++)
            dayOfMonths.push(i);

        return dayOfMonths;
    },

    /**
     * 연도와 월에 해당하는 마지막 날짜 조회
     * @param year
     * @param month
     */
    getLastDate(year, month, format) {
        const date = new Date(year, month, 1);
        const dateWrapper = moment(date);
        return dateWrapper.endOf('day').format(format);
    }
    
}
