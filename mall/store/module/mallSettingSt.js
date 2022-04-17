import MallSettingApi from "@/api/mallSetting/api/MallSettingApi";
import MallSetting from "@/api/mallSetting/domain/MallSetting";

/**
 * 마이몰 설정 정보
 */
export default {
  state: {
    mallSetting: new MallSetting()
  },

  getters: {
    // 마이몰 설정 데이터 리턴
    mallSettingData: state => state.mallSetting,

    // 몰 기본 정보 리턴
    mallBaseInfo: state => state.mallSetting.mallBaseInfo,

    // 배너 리스트 리턴
    bannerInfoList: state => state.mallSetting.bannerInfoList,

    // 재고 간단관리 여부
    stockSimpleManageYn: state => state.mallSetting.stockSimpleManageYn,

    // 고객센터 필수값 입력 여부
    callCenterYn: state => state.mallSetting.callCenter.email && state.mallSetting.callCenter.phone,

    // 약관관리 필수값 입력 여부
    policyInfoYn: state => state.mallSetting.policyInfo.term && state.mallSetting.policyInfo.privacy
  },

  mutations: {
    // 마이몰 정보 적용
    setMallSetting(state, data) {
      state.mallSetting = data;
    },

    // 배너 리스트 적용
    setBannerInfoList(state, data) {
      state.mallSetting.bannerInfoList = data;
    },
  },

  actions: {
    /**
     * 마이몰 정보 가져오기
     * @param commit
     */
    async getMallSetting({commit}) {
      await MallSettingApi.get().then(res => {
        commit("setMallSetting", res.data.data);
      }).catch(c => {
        console.log(c);
      });
    },

    /**
     * 마이몰 설정 수정
     * @param commit
     */
    async updateMallSetting(context) {
      await MallSettingApi.update(context.state.mallSetting).then(res => {
        context.commit("setMallSetting", res.data.data);
      }).catch(c => {
        console.log(c);
      });
    },
  }
}

