"use strict";

import memberApi from "../../model/member/api/memberApi";
import ModifyMemberData from "../../model/member/data/ModifyMemberData";
import memberDocSv from "../../model/member/sv/memberDocSv";
import strLib from "../../commons/lib/strLib";
import memberAuthApi from "@/model/member/api/memberAuthApi";
import memberSv from "@/model/member/sv/memberSv";

const member = {
    state : {
        memberInfo : {
            //회원 정보
            member : {},
            //회원 상세정보
            detail : {},
            // 정산 모든 문서 제출 완료 여부
            isSendAll : false
        },
    },
    mutations: {
        setMemberInfo(state, data) {
            state.memberInfo = data;
        },
        //판매점 이미지 삭제
        deleteSellerImg(state) {
            state.memberInfo.detail.sellerImg = null;
        },
        setDetail(state, detail) {
            state.memberInfo.detail = detail;
        },
        //가맹점 유의사항 동의 처리
        agreeSeInfo(state) {
            state.memberInfo.member.auth.agreeSe = true;
        },
        //비사업자 유의사항 다시보지 않기 적용
        closePersonalSeNotice(state) {
            state.memberInfo.member.auth.closePersonalSe = true;
        }
    },
    actions : {
        getMemberInfo({commit}) {
            return new Promise((resolve, reject) => {
                memberApi.getMemberInfo(res => {
                    commit('setMemberInfo', res.data.data);
                    resolve(res);
                }, res => {
                    reject(res);
                });
            })
        },
        //가맹점 유의사항 확인
        agreeSeInfo({commit}) {
            return new Promise((resolve) => {
                memberAuthApi.agreeSeInfo(res => {
                    commit('agreeSeInfo');
                    resolve(res);
                });
            });
        },
        //비사업자 유의사항 다시보지 않기
        closePersonalSeNotice({commit}) {
            return new Promise((resolve) => {
                memberAuthApi.closePersonalSeNotice(res => {
                    commit('closePersonalSeNotice');
                    resolve(res);
                });
            });
        }
    },
    getters : {
        memberInfo(state) {
            return state.memberInfo;
        },
        member(state) {
            return state.memberInfo.member;
        },
        memberDetail(state) {
            return state.memberInfo.detail;
        },
        modifyMember(state) {
            return new ModifyMemberData(state.memberInfo.member, state.memberInfo.detail);
        },
        //판매점 이미지 존재여부 체크
        existSellerImg(state) {
            return state.memberInfo.detail.sellerImg != null;
        },
        //문서 조회
        document(state) {
            return (documentType) => {
                return memberDocSv.getDocument(state.memberInfo.detail, documentType);
            }
        },
        //문서 존재 여부 체크
        isExistDocument(state) {
            return (documentType) => {
                return memberDocSv.isExistDocument(state.memberInfo.detail, documentType);
            }
        },
        //개인 사업자인지 확인
        isPersonal(state) {
            return state.memberInfo.member.businessType === 'PERSONAL';
        },
        //정산가능 여부
        isAllowAdjust(state) {
            return state.memberInfo.member.adjust.authState === 'ALLOW'
        },
        //정산일
        adjustDay(state) {
            return state.memberInfo.member.adjust.adjustDay;
        },
        //업무 카테고리 조회
        bizCateStr(state) {
            const linkage = state.memberInfo.member.linkage;
            if(linkage == null || strLib.isNull(linkage.bizCategory))
                return 'NO';
            else
                return linkage.bizCategory.subString(0,2);
        },
        //과세 가능한지 조회
        isAllowTax(getters) {
            //사업자이면서 업무 카테고리가 병원이 아닐때
            return !getters.isPersonal && getters.bizCateStr !== 'HO';
        },
        //과세타입인지 조회
        isTaxType(state) {
            return state.memberInfo.member.info.taxType !== 'TAX_FREE';
        },
        //가맹점 유의사항 안내팝업 출력여부 조회
        isShowStoreInfoModal(state) {
            return !state.memberInfo.member.auth.agreeSe;
        },
        //비사업자 유의사항 안내팝업 출력여부 조회
        isShowPersonalInfoModal(state, getters) {
            return getters.isPersonal && !state.memberInfo.member.auth.closePersonalSe;
        },
        // 정산 모든 문서 제출 완료 여부
        isSendAll(state) {
            return state.memberInfo.isSendAll;
        },
        //필수 기본정보 입력 필요여부
        isRequiredBasicInfo(state) {
            return memberSv.checkBasicInfoNotSet(state.memberInfo.member, state.memberInfo.detail);
        }
    }
};

export default member;
