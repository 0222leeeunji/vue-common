'use strict';

//네비바 메뉴 values
export default {
    navMenus: [
        //대시보드
        {key: 'dashboard', name: 'Dashboards', icon: 'ri-dashboard-3-line', path: '/dashboard'},
        //결제요청
        {
            key: 'payment', name: '결제요청', icon: 'ri-survey-line',
            subList: [
                {
                    key: 'remote', name: '원격결제',
                    subList: [
                        {key: 'paymentremoterequest', name: '결제요청', path: '/payment/remote/request'},
                        {key: 'paymentremotemanyrequest', name: '결제요청(대량)', path: '/payment/remote/manyRequest'},
                    ]
                },
                {
                    key: 'link', name: '링크결제',
                    subList: [
                        {key: 'paymentlinklist', name: '링크내역', path: '/payment/link/list'},
                        {key: 'paymentlinkpaylist', name: '결제내역', path: '/payment/link/payList'},
                    ]
                },
                {
                    key: 'manual', name: '등록결제',
                    subList: [
                        {key: 'paymentmanualrequest', name: '등록요청', path: '/payment/manual/request'},
                        {key: 'paymentmanualrequestlist', name: '등록내역', path: '/payment/manual/requestList'},
                        {key: 'paymentmanualmanyrequest', name: '등록요청(대량)', path: '/payment/manual/manyRequest'},
                        {key: 'paymentmanualmanypayrequest', name: '결제요청(대량)', path: '/payment/manual/manyPayRequest'},
                        {key: 'paymentmanualpaymentlist', name: '결제내역', path: '/payment/manual/paymentList'},
                    ]
                },
                {
                    key: 'regular', name: '정기결제',
                    subList: [
                        {key: 'paymentregularrequest', name: '승인요청', path: '/payment/regular/request'},
                        {key: 'paymentregularmanyrequest', name: '승인요청(대량)', path: '/payment/regular/manyRequest'},
                        {key: 'paymentregularrequestlist', name: '승인내역', path: '/payment/regular/requestList'},
                        {key: 'paymentregularpaymentlist', name: '결제내역', path: '/payment/regular/paymentList'},
                    ]
                },
                {key: 'paymenthandwrite', name: '수기결제', path: '/payment/handWrite'},
            ]
        },
        //결제현황
        {
            key: 'paymentlist', name: '결제현황', icon: 'ri-list-unordered',
            subList: [
                {key: 'paymentlistcomplete', name: '완료/취소', path: '/payment/list/complete'},
                {key: 'paymentlistrequest', name: '결제요청', path: '/payment/list/request'},
                {key: 'paymentlistcancelrequest', name: '취소요청', path: '/payment/list/cancelRequest'}
            ]
        },
        //정산관리
        {
            key: 'adjust', name: '정산관리', icon: 'ri-hand-coin-line',
            subList: [
                {key: 'adjustapply', name: '정산안내', path: '/adjust/apply'},
                {key: 'adjustlist', name: '정산내역', path: '/adjust/list'},
                {key: 'adjustapplynextday', name: '익일정산 신청', path: '/adjust/applyNextDay'},
                {key: 'adjusttaxlist', name: '부가세 자료', path: '/adjust/taxList'}
            ]
        },
        //현금영수증
        {
            key: 'cashst', name: '현금영수증', icon: 'ri-file-list-3-line',
            subList: [
                {key: 'cashstlist', name: '현금영수증 내역', path: '/cashst/list'},
                {key: 'cashstpublish', name: '현금영수증 발행', path: '/cashst/publish'},
            ]
        },
        //상품관리
        {
            key: 'goods', name: '상품관리', icon: 'ri-shopping-bag-3-line',
            subList: [
                {key: 'goodslist', name: '상품 내역', path: '/goods/list'},
                {key: 'goodsinsert', name: '상품 등록', path: '/goods/insert'},
            ]
        },
        //부계정 관리
        {
            key: 'subAccount', name: '부계정 관리', icon: 'ri-user-settings-line',
            subList: [
                {
                    key: 'subAccountmana', name: '부계정 관리',
                    subList: [
                        {key: 'subaccountlist', name: '부계정 내역', path: '/subAccount/list'},
                        {key: 'subaccountinsert', name: '부계정 등록', path: '/subAccount/insert'},
                    ]
                },
                {key: 'subaccountsale', name: '부계정 매출', path: '/subAccount/sale'},
            ]
        },
        //API 연동
        {key: 'api', name: 'API 연동', icon: 'ri-node-tree', clickFn:'apiLink'},
        //API 바로가기
        {key: 'apiLogin', name: 'API 바로가기', icon: 'ri-refresh-line', clickFn:'udpayApiLogin'},
        //설정
        {
            key: 'setting', name: '설정', icon: 'ri-settings-3-line',
            subList: [
                {key: 'settingpayment', name: '결제설정', path: '/setting/payment'},
                {key: 'settingmypage', name: '정보변경', path: '/setting/myPage'},
                {key: 'settingpaymentenv', name: '결제 옵션 설정', path: '/setting/paymentEnv'},
                {key: 'settingadjust', name: '정산 정보', path: '/setting/adjust'},
            ]
        },
        //고객센터
        {
            key: 'board', name: '고객센터', icon: 'ri-message-2-line',
            subList: [
                {key: 'boardlistnotice', name: '공지사항', path: '/board/list/NOTICE'},
                {key: 'boardfaq', name: '자주묻는질문', path: '/board/FAQ'},
                {
                    key: 'boardse', name: '고객문의',
                    subList: [
                        {key: 'boardlistse_qna', name: '문의내역', path: '/board/list/ETC'},
                        {key: 'boardinsertse_qna', name: '문의하기', path: '/board/insert'},
                    ]
                },
            ]
        },
    ],

    // 네비바에 없는 페이지 액티브 하기 위한 값
    navSubActive: {
        paymentlinkinsert:'paymentlinklist',
        boardviewse_qna:'boardlistse_qna',
        boardviewnotice:'boardlistnotice',
        paymentremotemanyrequestlist: 'paymentremotemanyrequest',
        paymentmanualrequestview: 'paymentmanualrequestlist',
        paymentmanualmanypayresult: 'paymentmanualpaymentlist',
        paymentregularrequestview: 'paymentregularrequestlist'
    }
}
