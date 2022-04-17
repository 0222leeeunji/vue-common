import GoodsCategoryApi from "@/api/goods/api/GoodsCategoryApi";

/**
 * 카테고리
 */
export default {
  state: {
    categoryList: []
  },

  getters: {
    goodsCategoryList: state => state.categoryList,
  },

  mutations: {
    setCategoryList(state, data) {
      state.categoryList = data;
    },
  },

  actions: {
    /**
     * 카테고리 리스트 정보 가져오기
     * @param commit
     */
    async getListByMemberID({commit}) {
      await GoodsCategoryApi.listByMemberID().then(res => {
        commit("setCategoryList", res.data.data);
      }).catch(c => {
        console.log(c);
      });
    },
  }
}

