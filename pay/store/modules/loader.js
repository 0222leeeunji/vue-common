"use strict";

const loader = {
    state : {
        /**
         * Loader 컴포넌트(/components/Loader.vue)의 로딩창 표시여부
         */
        loading : false
    },
    mutations: {
        showLoader(state) {
            state.loading = true;
        },
        hideLoader(state) {
            state.loading = false;
        }
    },
    getters : {
        isShowLoader(state) {
            return state.loading;
        }
    }
};

export default loader;