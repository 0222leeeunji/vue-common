'use strict';

import {MessageBox} from 'element-ui'

/**
 * 공통 Sv
 */
export default {

    /**
     * confirm Dialog
     * @param msg 메시지
     * @param title 타이틀
     * @param confirmHandler 확인 handler
     * @param cancelHandler 취소 handler
     * @param option 옵션
     */
    confirm(msg, title, confirmHandler, cancelHandler, option) {
        if(!option) {
            option = {
                confirmButtonText: '확인',
                cancelButtonText: '취소',
            }
        }

        option.lockScroll = false;

        MessageBox.confirm(msg, title, option)
            .then(confirmHandler)
            .catch(cancelHandler);
    },

    /**
     * 삭제 confirm Dialog
     * @param confirmHandler 확인 handler
     * @param cancelHandler 취소 handler
     */
    deleteConfirm(confirmHandler, cancelHandler) {
        this.confirm("정말 삭제하시겠습니까?", "삭제", confirmHandler, cancelHandler, {confirmButtonText: '삭제', cancelButtonText: '취소'});

    },
    
    /**
     * 일괄삭제 confirm Dialog
     * @param confirmHandler 확인 handler
     * @param cancelHandler 취소 handler
     */
    deleteAllConfirm(confirmHandler, cancelHandler) {
        this.confirm("정말 일괄삭제 하시겠습니까?", "삭제", confirmHandler, cancelHandler, {confirmButtonText: '삭제', cancelButtonText: '취소'});

    },

    /**
     * 확인창
     * @param msg
     * @param callback
     */
    check(msg, callback) {
        MessageBox.alert(msg, '확인', {
            confirmButtonText: '확인',
            callback: callback,
            lockScroll: false
        });
    }

}
