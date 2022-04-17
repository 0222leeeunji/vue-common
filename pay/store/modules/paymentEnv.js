"use strict";

import paymentEnvApi from "../../model/paymentEnv/api/paymentEnvApi";
import objectLib from "@/commons/lib/objectLib";
import PaymentEnv from "@/model/paymentEnv/data/PaymentEnv";

/**
 * 결제 환경설정
 */
const paymentEnv = {
    state : {
        paymentEnv : new PaymentEnv()
    },
    mutations: {
        setPaymentEnv(state, data) {
            state.paymentEnv = data;
        },
    },
    actions : {
        getPaymentEnv({commit}) {
            return new Promise((resolve, reject) => {
                paymentEnvApi.get(res => {
                    commit('setPaymentEnv', res.data);
                    resolve(res);
                }, res => {
                    reject(res);
                });
            })
        },
    },
    getters : {
        paymentEnv(state) {
            return state.paymentEnv;
        },
        modifyPaymentEnv(state) {
            const obj = objectLib.deepClone(state.paymentEnv);
            obj.serviceChargeUse = obj.serviceCharge.useYn;
            obj.serviceChargePercent = obj.serviceCharge.percent;

            if (!obj.opImg)
                obj.opImg = 'DEFAULT';

            return obj;
        }
    }
};

export default paymentEnv;