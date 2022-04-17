'use strict';

/**
 * 공통 value
 */
export default {
  // 카테고리타입 리스트
  categoryTypeList: [
    // 현재는 고정, 추후엔 db로 연동하여 작업가능성 있음 (db는 구현되어있음)
    {id:'BEST', name: '베스트', seq: 1},
    {id:'EVENT', name: '기획전', seq: 2},
    {id:'BASIC', name: '일반', seq:3},
  ]
}
