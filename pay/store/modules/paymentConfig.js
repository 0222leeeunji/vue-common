"use strict";

import MemberPayWithAllFee from "@/model/memberPayment/data/MemberPayWithAllFee";
import memberPaymentApi from "@/model/memberPayment/api/memberPaymentApi";

/**
 * 결제 방법 설정 및 수수료 정보
 */
const paymentConfig = {
    state : {
        memberPaymentWithFee : new MemberPayWithAllFee()
    },
    mutations: {
        //회원 결제 설정 및 수수료 정보
        setMemberPaymentWithFee(state, data) {
            state.memberPaymentWithFee = data;  
        },
        //회원 결제 설정
        setMemberPayment(state, data) {
            state.memberPaymentWithFee.memberPayment = data;
        }
    },
    actions : {
        getMemberPaymentWithFee({commit}) {
            return new Promise((resolve, reject) => {
                memberPaymentApi.getMemberPayWithAllFee(res => {
                    commit('setMemberPaymentWithFee', res.data);
                    resolve(res);
                }, res => {
                    reject(res);
                });
            })
        },
    },
    getters : {
        memberPaymentWithFee(state) {
            return state.memberPaymentWithFee;
        },
        memberPayment(state) {
            return state.memberPaymentWithFee.memberPayment;
        },
        feeInfo(state) {
            return state.memberPaymentWithFee.allFee;
        }
    }
};

export default paymentConfig;