'use strict';

/**
 * element-ui Sv
 */
export default {
  /**
   * 얼럿
   * @param {object} obj this
   * @param {string} title 제목
   * @param {string} msg 내용
   */
  alert(obj, title, msg, callback) {
    obj.$alert(msg, title, {
      dangerouslyUseHTMLString: false,
      confirmButtonText: '확인',
      type: 'primary',
      callback: callback
    });
  },

  /**
   * 확인/취소 얼럿
   * @param obj obj this
   * @param msg 확인 메시지
   * @param title 타이틀
   * @param confirmCallback 확인 시 callback 메서드
   * @param cancelCallback 취소 시 callback 메서드
   */
  confirm(obj, msg, title, confirmCallback, cancelCallback) {
    obj.$confirm(msg, title, {
      confirmButtonText: "확인",
      cancelButtonText: "취소"
    }).then(confirmCallback)
      .catch(cancelCallback);
  },

  /**
   * toast 보여줌
   * @param {object} obj this
   * @param {string} title 제목
   * @param {string} msg 내용
   * @param {string} type 타입 (success, warning, info, error)
   * @param {number} duration 사라짐속도
   */
  notify(obj, title, msg, type = 'success', duration = 3000) {
    obj.$notify({
      title: title,
      message: msg,
      type: type,
      duration: duration
    });
  },
}
