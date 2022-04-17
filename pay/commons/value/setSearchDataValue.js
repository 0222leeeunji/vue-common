import SetSearchSelectData from "../../model/common/searchForm/data/setSearchData/SetSearchSelectData";
import SetSearchBaseData from "../../model/common/searchForm/data/setSearchData/SetSearchBaseData";
import inputType from "../../model/common/searchForm/type/inputType";
import SetSearchDateRangeData from "../../model/common/searchForm/data/setSearchData/SetSearchDateRangeData";
import paymentValue from "./paymentValue";
import SetSearchMultiData from "../../model/common/searchForm/data/setSearchData/SetSearchMultiData";
import SetSearchNumRangeData from "../../model/common/searchForm/data/setSearchData/SetSearchNumRangeData";
import SetSearchDateQuarterData from "../../model/common/searchForm/data/setSearchData/SetSearchDateQuarterData";
import objectLib from "../lib/objectLib";
import paymentHostType from "../../model/payment/type/paymentHostType";
import paymentRequestStateType from "../../model/payment/type/paymentRequestStateType";

const makeSelectForValues = (values) => {
    return [{value:'', name:'전체'}].concat(values);
};

// 결제 주체 타입 selectbox options
const paymentHostValues = makeSelectForValues(objectLib.getItemsToObjArr(paymentHostType, 'value', 'name'));

//결제현황의 공통된 검색
const commonPaymentList = [
    new SetSearchBaseData(inputType.text, '키워드 검색', '키워드를 입력해주세요.', 'keyword'),
    new SetSearchDateRangeData('기간'),
    new SetSearchBaseData(inputType.text, '상품명', '상품명을 입력해주세요.', 'goodName'),
    new SetSearchNumRangeData('상품금액', 'minTotalPrice', 'maxTotalPrice', '0', '10,000,000'),
    new SetSearchBaseData(inputType.text, '구매자 휴대폰번호', '휴대폰번호를 - 없이 입력해주세요.', 'customerMobile'),
    new SetSearchBaseData(inputType.text, '카드번호 뒷 4자리', '카드번호 뒷 4자리를 입력해주세요.', 'cardNum'),
    new SetSearchSelectData('결제자 구분', paymentHostValues, 'hostType'),
    new SetSearchBaseData(inputType.text, '부계정 아이디/이름', '부계정 아이디/이름을 입력해주세요.', 'subMemberIdOrName')
];

export default {

    //원격결제 대량 결제요청 리스트
    manyPaymentRemoteRequest : [
        new SetSearchSelectData('요청상태', [{value:'', name:'전체'}, {value:'REQUEST', name:'요청중'}, {value:'COMPLETE', name:'요청완료'}, {value:'CANCEL', name:'요청취소'}, {value:'FAIL', name:'요청실패'}], 'requestState'),
        new SetSearchSelectData('결제상태', [{value:'', name:'전체'}, {value:'READY', name:'결제대기'}, {value:'COMPLETE', name:'결제완료'}], 'paymentState'),
        new SetSearchBaseData(inputType.text, '키워드 검색', '키워드를 입력해주세요.', 'keyword'),
        new SetSearchBaseData(inputType.text, '휴대폰번호', '휴대폰번호를 - 없이 입력해주세요.', 'mobile'),
        new SetSearchBaseData(inputType.text, '상품명', '상품명을 입력해주세요.', 'goodName'),
        new SetSearchBaseData(inputType.text, '이름', '이름을 입력해주세요.', 'name'),
        new SetSearchSelectData('과세/면세', [{value:'', name:'전체'}, {value:true, name:'과세'}, {value:false, name:'면세'}], 'useTax'),
        new SetSearchDateRangeData('기간'),
    ],

    //결제링크 리스트
    paymentLink : [
        new SetSearchSelectData('주소요청 여부', [{value:'', name:'전체'}, {value:true, name:'요청'}, {value:false, name:'요청안함'}], 'useAddr'),
        new SetSearchBaseData(inputType.text, '상품명', '상품명을 입력해주세요.', 'goodsName'),
        new SetSearchDateRangeData('등록일'),
        new SetSearchSelectData('구매자 입력 가능', [{value:'', name:'전체'}, {value:true, name:'가능'}, {value:false, name:'불가능'}], 'usePriceInput'),
    ],

    //결제링크 결제내역 리스트
    paymentLinkPayments : [
        new SetSearchSelectData('상태', [{value:'', name:'전체'}, {value:'COMPLETE', name:'결제완료'}, {value:'CANCEL', name:'결제취소'}], 'state'),
        new SetSearchBaseData(inputType.text, '상품명', '상품명을 입력해주세요.', 'goodName'),
        new SetSearchDateRangeData('결제완료일'),
        new SetSearchBaseData(inputType.text, '구매자 이름', '구매자 이름을 입력해주세요.', 'customerName'),
        new SetSearchBaseData(inputType.text, '카드번호 뒷 4자리', '카드번호 뒷 4자리를 입력해주세요.', 'cardNum'),
        new SetSearchBaseData(inputType.text, '구매자 휴대폰 번호', '휴대폰번호를 - 없이 입력해주세요.', 'customerMobile'),
    ],

    //등록결제 등록내역
    paymentManualReqList : [
        new SetSearchSelectData('상태', makeSelectForValues(paymentValue.manualStates), 'stateType'),
        new SetSearchBaseData(inputType.text, '키워드', '구매자명, 고객번호, 상품명, 휴대폰번호, 이메일을 입력해주세요.', 'keyword'),
        new SetSearchMultiData('예상결제일'),
        new SetSearchMultiData('일자검색', [
            new SetSearchSelectData(null, [{value:'', name:'선택하세요.'}, {value:'REJECT', name:'등록거절일'}, {value:'CANCEL', name:'요청취소일'}], 'dateInfoType'),
            new SetSearchBaseData(inputType.date, null, 'yyyy-MM-dd', 'dateInfoDate')
        ]),
        new SetSearchSelectData('결제자 구분', paymentHostValues, 'hostType'),
        new SetSearchBaseData(inputType.text, '부계정 아이디/이름', '부계정 아이디/이름을 입력해주세요.', 'subMemberID'),
        new SetSearchDateRangeData('기간')
    ],

    //등록결제 결제요청 (대량)
    paymentManualManyPayReqList : [
        new SetSearchMultiData('예상결제일'),
        new SetSearchBaseData(inputType.text, '키워드', '키워드를 입력해주세요.', 'keyword')
    ],

    //빌링(등록,정기) 결제 결제내역
    paymentBillingPayList : [
        new SetSearchSelectData('상태', [{value:'', name:'전체'}, {value:'COMPLETE', name:'결제완료'}, {value:'CANCEL', name:'결제취소'}], 'state'),
        new SetSearchBaseData(inputType.text, '키워드', '키워드를 입력해주세요.', 'keyword'),
        new SetSearchDateRangeData('결제 완료일'),
        new SetSearchNumRangeData('상품금액', 'minTotalPrice', 'maxTotalPrice', '0', '10,000,000'),
        new SetSearchBaseData(inputType.text, '카드번호 뒷 4자리', '카드번호 뒷 4자리를 입력해주세요.', 'cardNum'),
    ],

    //정기결제 승인내역
    paymentRegularReqList : [
        new SetSearchSelectData('상태', makeSelectForValues(paymentValue.regularStates), 'stateType'),
        new SetSearchBaseData(inputType.text, '키워드', '상품명, 휴대폰번호, 이메일을 입력해주세요.', 'keyword'),
        new SetSearchMultiData('결제주기'),
        new SetSearchMultiData('일자검색', [
            new SetSearchSelectData(null, [{value:'', name:'선택하세요.'}, {value:'LIMIT', name:'정기결제 만료일'}, {value:'AGREE', name:'승인완료일'}], 'dateInfoType'),
            new SetSearchBaseData(inputType.date, null, 'yyyy-MM-dd', 'dateInfoDate')
        ]),
        new SetSearchDateRangeData('기간'),
        new SetSearchNumRangeData('상품금액', 'minTotalPrice', 'maxTotalPrice', '0', '10,000,000')
    ],

    //결제현황 완료/취소
    paymentCompleteList : [new SetSearchSelectData('상태', [{value:'', name:'전체'}, {value:'COMPLETE', name:'결제완료'}, {value:'CANCEL', name:'결제취소'}], 'state')]
        .concat(commonPaymentList),

    //결제현황 결제요청
    paymentRequestList : [new SetSearchSelectData('상태', makeSelectForValues(objectLib.getItemsToObjArr(paymentRequestStateType, 'value', 'name')), 'stateType')]
        .concat(commonPaymentList),

    //결제현황 취소요청
    paymentCancelList : [new SetSearchSelectData('상태', [{value:'', name:'전체'}, {value:'REQUEST', name:'취소요청'}, {value:'COMPLETE', name:'취소완료'}, {value:'CANCEL', name:'취소요청취소'}], 'requestState')]
        .concat(commonPaymentList),

    //정산내역
    adjust : [
        new SetSearchSelectData('정산상태', [{value:'', name:'전체'}, {value:'COMPLETE', name:'정산완료'}, {value:'READY', name:'정산대기'}], 'paymentAdjustState'),
        new SetSearchBaseData(inputType.text, '키워드', '키워드명을 입력해주세요.', 'keyword'),
        new SetSearchDateRangeData('기간'),
        new SetSearchBaseData(inputType.text, '구매자 휴대폰번호', '휴대폰번호를 - 없이 입력해주세요.', 'customerMobile'),
    ],

    //정산내역 부가세
    adjustTax : [
        new SetSearchDateQuarterData('기간', 'startDate', 'endDate'),
    ],
    
    //현금영수증 내역
    cashst : [
        new SetSearchSelectData('정산상태', [{value:'', name:'전체'}, {value:'PUBLISH', name:'발행'}, {value:'CANCEL', name:'취소'}, {value:'ERROR', name:'발행실패'}], 'publishState'),
        new SetSearchBaseData(inputType.text, '키워드', '키워드명을 입력해주세요.', 'keyword'),
        new SetSearchDateRangeData('기간'),
        new SetSearchSelectData('발행용도', [{value:'', name:'전체'}, {value:'0', name:'소득공제용'},{value:'1', name:'지출증빙용'}], 'trCode'),
        new SetSearchSelectData('과세/면세', [{value:'', name:'전체'},{value:'TG01', name:'과세'}, {value:'TG02', name:'면세'}], 'corpTaxType'),
        new SetSearchBaseData(inputType.text, '상품명', '상품명을 입력해주세요.', 'goodName'),
        new SetSearchBaseData(inputType.text, '휴대폰번호/사업자등록번호', '- 없이 입력해주세요.', 'idInfo')
    ],

    //상품 내역
    goods : [
        new SetSearchSelectData('과세/면세', [{value:'', name:'전체'},{value:true, name:'과세'}, {value:false, name:'면세'}], 'useTax'),
        new SetSearchBaseData(inputType.text, '키워드', '키워드명을 입력해주세요.', 'keyword'),
        new SetSearchDateRangeData('기간')
    ],

    //부계정 내역, 부계정 매출
    subAccount : [
        new SetSearchSelectData('사용여부', [{value:'', name:'전체'}, {value:true, name:'사용'}, {value:false, name:'미사용'}], 'useEnable'),
        new SetSearchBaseData(inputType.text, '키워드', '키워드명을 입력해주세요.', 'keyword'),
        new SetSearchDateRangeData('기간'),
        new SetSearchBaseData(inputType.text, '부계정 이름', '부계정 이름을 입력해주세요.', 'name'),
        new SetSearchBaseData(inputType.text, '부계정 휴대폰번호', '휴대폰번호를 - 없이 입력해주세요.', 'memberIDLike'),
        new SetSearchSelectData('권한', [{value:'', name:'전체'}, {value:'mainAuth', name:'공통'}, {value:'cancelAuth', name:'결제취소'}], 'usePermission')
    ],

    //알림내역
    notify : [
        new SetSearchSelectData('타입', [{value:'', name:'전체'}, {value:'adjust', name:'정산'}, {value:'complete', name:'결제완료'}, {value:'cancel', name:'결제취소'}], 'wideEventType'),
        new SetSearchDateRangeData("알림기간")
    ]
}