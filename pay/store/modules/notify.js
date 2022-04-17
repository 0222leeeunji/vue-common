"use strict";

import notifyApi from "@/model/notify/api/notifyApi";

const notify = {
    state : {
        notifyNoConfirmCnt : 0
    },
    mutations: {
        setNotifyNoConfirmCnt(state, data) {
            state.notifyNoConfirmCnt = data;
        }
    },
    actions : {
        getNotifyNoConfirmCnt({commit}) {
            notifyApi.noConfirmCount(res => {
                commit('setNotifyNoConfirmCnt', res.data)
            });
        },
    },
    getters : {
        notifyNoConfirmCnt(state) {
            return state.notifyNoConfirmCnt;
        },
    }
};

export default notify;