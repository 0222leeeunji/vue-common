/**
 * 메뉴, 헤더관련 value
 */
export default {
  // 네비바 메뉴 리스트
  navbarMenu: [
    {
      key:'main', title: '대시보드', path: '/seller/main', icon: 'ri-dashboard-fill'
    },
    {
      key: 'goods', title: '상품 관리', icon: 'ri-shopping-bag-3-line',
      subMenu: [
        {key:'goodsInsert', title: '상품 등록', path: '/seller/goods/insert'},
        {key:'goodsCategoryList', title: '카테고리 관리', path: '/seller/goods/category/list'},
        {key:'goodsList', title: '상품 리스트', path: '/seller/goods/list'},
      ]
    },
    {
      key:'order', title: '주문 관리', icon: 'ri-shopping-cart-2-line',
      subMenu: [
        {key:'orderList', title: '주문 리스트', path: '/seller/order/list'},
      ]
    },
    {
      key:'message', title: '메시지 관리', icon: 'ri-message-2-line',
      subMenu: [
        {key:'messageSetting', title: '메시지 설정', path: '/seller/message/setting'},
        {key:'messageList', title: '메시지 사용내역', path: '/seller/message/list'},
        {key:'messageCharge', title: '메시지 충전', path: '/seller/message/charge'},
      ]
    },
    {
      key:'setting', title: '마이몰 관리', icon: 'ri-settings-2-line',
      subMenu: [
        {key:'settingMyMall', title: '마이몰 설정', path: '/seller/setting/myMall'},
        {key:'settingBanner', title: '배너 관리', path: '/seller/setting/banner'},
        {key:'settingTerms', title: '정책/약관 관리', path: '/seller/setting/terms'},
      ]
    },
  ],

  // 헤더 타이틀
  headerTitle: {
    main: ['대시보드'],
    goodsInsert: ['홈', '상품 관리', '상품 등록'],
    goodsUpdate: ['홈', '상품 관리', '상품 수정'],
    goodsCategoryInsert: ['홈', '상품 관리', '카테고리 등록'],
    goodsCategoryUpdate: ['홈', '상품 관리', '카테고리 수정'],
    goodsCategoryList: ['홈', '상품 관리', '카테고리 관리'],
    goodsList: ['홈', '상품 관리', '상품 리스트'],
    orderList: ['홈', '주문 관리', '주문 리스트'],
    orderDetail: ['홈', '주문 관리', '주문 상세'],
    messageSetting: ['홈', '메시지 관리', '메시지 설정'],
    messageList: ['홈', '메시지 관리', '메시지 사용내역'],
    messageCharge: ['홈', '메시지 관리', '메시지 충전'],
    settingMyMall: ['홈', '마이몰 관리', '마이몰 설정'],
    settingBanner: ['홈', '마이몰 관리', '배너 관리'],
    settingTerms: ['홈', '마이몰 관리', '정책/약관 관리'],
  },

  // 네비바 메뉴 리스트에 없지만 액티브 처리해야할 값 명세
  navbarSubActive: {
    orderDetail:'orderList',
    goodsUpdate:'goodsInsert',
    goodsCategoryInsert:'goodsCategoryList',
    goodsCategoryUpdate:'goodsCategoryList'
  }
}
