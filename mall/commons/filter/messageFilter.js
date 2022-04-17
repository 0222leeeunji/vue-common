import Vue from 'vue';

/**
 * 메시지 내용 구분 필터
 */
Vue.filter('messageFilter', function (input) {
  switch (input) {
    case 'PAYMENT_COMPLETE': return  '결제완료';
    case 'PAYMENT_CANCEL': return '결제취소';
    case 'SHIPMENT_START': return '배송 출발';
    case 'INVOICE_REG_COMPLETE': return '송장입력 완료';
    case 'REFUND_REQUEST': return '환불요청';
    case 'REFUND_COMPLETE': return '환불완료';
  }
})

Vue.filter('sendStateFilter', function (input) {
  switch (input) {
    case 'COMPLETE': return '성공';
    case 'FAIL': return '실패';
  }
})
