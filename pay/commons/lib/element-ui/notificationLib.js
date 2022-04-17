'use strict';

import {Notification} from 'element-ui'

/**
 * 공통 Sv
 */
export default {

    /**
     * toast 보여줌
     * @param {string} title 제목
     * @param {string} msg 내용
     * @param {string} type 타입 (success, warning, info, error)
     * @param {boolean} useHtml html 사용여부
     * @param {number} duration 사라짐속도
     */
    notify(title, msg, type = 'success', useHtml = false, duration = 3000) {
        Notification({
            title: title,
            message: msg,
            type: type,
            dangerouslyUseHTMLString: useHtml,
            duration: duration
        });
    },

    /**
     * success toast 보여줌
     * @param {string} msg 내용
     * @param {boolean} useHtml html 사용여부
     */
    success(msg, useHtml = false) {
        this.notify("성공", msg, useHtml);
    },

    /**
     * fail toast 보여줌
     * @param msg
     */
    fail(msg) {
        this.notify("실패", msg, "warning");
    },

    /**
     * info 보여줌
     * @param {string} msg 내용
     */
    info(msg) {
        this.notify("확인", msg, "info");
    },

    /**
     * warning toast 보여줌
     * @param {string} msg 내용
     */
    warning(msg) {
        this.notify("경고", msg, "warning");
    },

    /**
     * error toast 보여줌
     * @param {string} msg 내용
     */
    error(msg) {
        this.notify("에러", msg, "error");
    },




}
