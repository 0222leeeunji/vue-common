import Vue from 'vue'
import Vuex from 'vuex'
import member from "./modules/member"
import resConfig from "./modules/resConfig";
import product from "./modules/product";
import loader from "./modules/loader";
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

const ls = new SecureLS({encodingType: 'aes', isCompression : false});

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        member : member,
        resConfig : resConfig,
        product : product,
        loader : loader
    },
    plugins : [
        createPersistedState({
            paths : ['member', 'resConfig', 'product'],
            storage : {
                getItem : (key) => ls.get(key),
                setItem : (key, value) => ls.set(key, value),
                removeItem : (key) => ls.remove(key)
            }
        })
    ],
    strict: process.env.NODE_ENV !== 'production'
})
