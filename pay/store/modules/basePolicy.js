"use strict";

import BasePolicy from "../../model/system/data/BasePolicy";
import systemApi from "../../model/system/api/systemApi";

const basePolicy = {
    state : {
        basePolicy : new BasePolicy()
    },
    mutations: {
        setBasePolicy(state, data) {
            state.basePolicy = data;
        }
    },
    actions : {
        getBasePolicy({commit}) {
            systemApi.getBasePolicy(res => {
                commit('setBasePolicy', res.data)
            });
        },
    },
    getters : {
        basePolicy(state) {
            return state.basePolicy;
        },
        refundBankInfo(state) {
            return state.basePolicy.refundBankInfo;
        }
    }
};

export default basePolicy;