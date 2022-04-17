'use strict';

import Vue from 'vue'
import strLib from "../lib/strLib";
import cpMemberType from "../../model/member/type/cpMemberType";

/**
 * 회원 타입 이름 조회
 * @param memberType 회원 타입
 * @return 회원 타입 이름
 */

Vue.filter('memberTypeName', function (memberType) {
    if (strLib.isNull(memberType))
        return "";

    return cpMemberType[memberType].name||'';
});

