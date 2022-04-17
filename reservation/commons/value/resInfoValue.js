'use strict';

/**
 * 예약정보 value
 */
export default {

    // 예약상태
    resStateArr : [
        {type:'REQUEST', name:'예약대기'},
        {type:'FIX_REQUEST', name:'확정대기'},
        {type:'FIX', name:'예약확정'},
        {type:'USED', name:'이용완료'},
        {type:'CANCEL_REQUEST', name:'예약취소 요청'},
        {type:'CANCEL', name:'예약취소'}
    ],

    // 결제상태
    paymentStateArr : [
        {type:'REQUEST', name:'결제대기'},
        {type:'COMPLETE', name:'결제완료'},
        {type:'CANCEL_REQUEST', name:'결제취소요청'},
        {type:'CANCEL', name:'결제취소'}
    ],

    // 결제수단
    paymentMethodTypeArr : [
        {type:'CARD', name:'카드결제'}
    ],
}