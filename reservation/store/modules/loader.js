"use strict";

const loader = {
    state : {
        /**
         * Loader 컴포넌트(/components/Loader.vue)의 로딩창 표시여부
         */
        loading : false,
        loaderText : "",
    },
    mutations: {
        showLoader(state) {
            state.loading = true;
        },
        hideLoader(state) {
            state.loading = false;
            state.loaderText = "";
        },
        setLoaderTest(state, text) {
            state.loaderText = text;
        }
    },
    getters : {
        isShowLoader(state) {
            return state.loading;
        },
        loaderText(state) {
            return state.loaderText;
        }
    }
};

export default loader;