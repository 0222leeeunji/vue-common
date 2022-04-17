"use strict";

export default {
    //등록결제 등록상태
    manualStates : [
        {value : 'REQUEST', name : '요청'},
        {value : 'COMPLETE', name : '완료'},
        {value : 'REJECT', name : '거절'},
        {value : 'RELEASE', name : '해지'},
        {value : 'CANCEL', name : '취소'}],

    //정기결제 승인상태
    regularStates : [
        {value : 'REQUEST', name : '요청'},
        {value : 'COMPLETE', name : '승인'},
        {value : 'PAUSE', name : '일시정지'},
        {value : 'RELEASE', name : '해지'},
        {value : 'CANCEL', name : '요청취소'}],

    //결제요청 상태
    paymentRequestStates : [
        {value : 'REQUEST', name : '결제요청'},
        {value : 'COMPLETE', name : '결제완료'},
        {value : 'FAIL', name : '결제실패'},
        {value : 'REQUEST_CANCEL', name : '결제요청취소'},
        {value : 'LIMIT', name : '결제만료'}],
}
