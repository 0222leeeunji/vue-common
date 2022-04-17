"use strict";

import resConfigApi from "@/model/resConfig/api/resConfigApi";

const resConfig = {
    state : {
        resConfig : null,
    },
    mutations: {
        setResConfig(state, data) {
            state.resConfig = data;
        },
    },
    actions : {
        getResConfig({commit, getters}) {
            resConfigApi.get(getters.memberID, res => {
                commit('setResConfig', res.data.data);
            }, () => {});
        }
    },
    getters : {
        resConfig : state => {
            return state.resConfig;
        },
        addResInfoConfig : state => {
            return state.resConfig ? state.resConfig.addResInfoConfig : null;
        }
    }
};

export default resConfig;