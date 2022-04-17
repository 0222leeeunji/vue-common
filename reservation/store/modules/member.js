"use strict";

import memberApi from "@/model/member/api/memberApi";

const member = {
    state : {
        member : {},

        /**
         * 필수 설정(상품, 업체, 예약관리)을 했는지 체크
         * 이 정보를 통해 메뉴에 필수설정 표시
         */
        configCheck : {
            //상품정보 등록 유무
            product : false,
            //운영정보 등록 유무
            operation : false,
            //가격정보 등록 유무
            productPrice : false,
            //업체정보 등록 유무
            company : false,
            //예약관리 설정 등록 유무
            resConfig : false
        },
    },
    mutations: {
        setMember(state, member) {
            state.member = member;
        },
        setConfigCheck(state, data) {
            state.configCheck = data;
        },
        configProduct(state) {
            state.configCheck.product = true;
        },
        configOperation(state) {
            state.configCheck.operation = true;
        },
        configProductPrice(state) {
            state.configCheck.productPrice = true;
        },
        configCompany(state) {
            state.configCheck.company = true;
        },
        configResConfig(state) {
            state.configCheck.resConfig = true;
        },
    },
    actions : {
        getMember({commit}) {
            return new Promise((resolve, reject) => {
                memberApi.getMember(res => {
                    commit('setMember', res.data.data);
                    resolve(res);
                }, res => reject(res));
            });
        },
        //필수 설정(상품, 업체, 예약관리) 체크 조회
        getConfigCheck({commit}) {
            memberApi.getConfigRegCheck(res => {
                commit('setConfigCheck', res.data.data);
            }, ()=>{}, ()=>{});
        },
    },
    getters : {
        member : state => {
            return state.member;
        },
        memberID : (state) => {
            return state.member.memberID;
        },
        //상품설정 했는지 체크
        isConfigProduct : (state) => {
            return state.configCheck.product && state.configCheck.operation && state.configCheck.productPrice;
        },
        //업체정보 설정 했는지 체크
        isConfigCompany : (state) => {
            return state.configCheck.company;
        },
        //예약관리 설정 했는지 체크
        isConfigResConfig : (state) => {
            return state.configCheck.resConfig;
        }

    }
};

export default member;