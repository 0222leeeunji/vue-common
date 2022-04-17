import SystemApi from "@/api/system/SystemApi";

/**
 * 기본정책 정보
 */
export default {
  state: {
    basePolicy: {}
  },

  getters: {
    // 메시티 타입별 단가 데이터 리턴
    messageTypeCost: state => state.basePolicy.messageTypeCost,
  },

  mutations: {
    // 기본정책 정보 적용
    setBasePolicy(state, data) {
      state.basePolicy = data;
    },
  },

  actions: {
    /**
     * 기본정책 정보 가져오기
     * @param commit
     */
    async getBasePolicy({commit}) {
      await SystemApi.getBasePolicy().then(res => {
        commit("setBasePolicy", res.data.data);
      }).catch(c => {
        console.log(c);
      });
    },
  }
}

