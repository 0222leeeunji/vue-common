"use strict";

import productApi from "@/model/product/api/productApi";

const product = {
    state : {
        productCode : null,
    },
    mutations: {
        setProductCode(state, code) {
            state.productCode = code;
        },
    },
    actions : {
        getProductCode({getters, commit}) {
            productApi.getByMemberID(getters.memberID, res => {
                commit('setProductCode', res.data.data.code);
            }, ()=>{}, ()=>{});
        }
    },
    getters : {
        productCode : state => {
            return state.productCode;
        },
    }
};

export default product;