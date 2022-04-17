import Vue from 'vue'
import Vuex from 'vuex'
import member from './modules/member'
import loader from './modules/loader'
import basePolicy from './modules/basePolicy'
import paymentEnv from './modules/paymentEnv'
import notify from "./modules/notify";
import common from "./modules/common";
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import paymentConfig from "./modules/paymentConfig";

const ls = new SecureLS({encodingType: 'aes', isCompression : false});

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        member : member,
        loader : loader,
        basePolicy : basePolicy,
        paymentEnv : paymentEnv,
        notify : notify,
        common : common,
        paymentConfig : paymentConfig
    },
    plugins : [
        createPersistedState({
            paths : ['member', 'basePolicy', 'paymentEnv', 'notify', 'paymentConfig'],
            storage : {
                getItem : (key) => ls.get(key),
                setItem : (key, value) => ls.set(key, value),
                removeItem : (key) => ls.remove(key)
            }
        })
    ],
    strict: process.env.NODE_ENV !== 'production'
})
