'use strict';

import Vue from 'vue'
import strLib from "../lib/strLib";
import notifyEventType from "@/model/notify/type/notifyEventType";

/**
 * 알림 이벤트 타입 이름
 * @param eventType 알림 이벤트 타입
 * @return 이벤트 타입 명
 */
Vue.filter('notifyEventTypeName', function (eventType) {
    if (strLib.isNull(eventType))
        return "";

    return notifyEventType[eventType]||'';
});

/**
 * 알림 이벤트 타입에 따른 메시지
 * @param eventType 알림 이벤트 타입
 * @return 이벤트 타입 메시지
 */
Vue.filter('notifyEventTypeMsg', function (eventType) {
    if (strLib.isNull(eventType))
        return "";

    return notifyEventType.getMsg(eventType);
});

