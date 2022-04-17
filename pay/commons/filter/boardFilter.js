'use strict';

import Vue from 'vue'
import strLib from "../lib/strLib";
import boardNameType from "../../model/board/type/boardNameType";
import faqType from "../../model/board/type/faqType";
import qnaType from "../../model/board/type/qnaType";
import boardStateType from "@/model/board/type/boardStateType";

/**
 * 게시판 상세유형 이름 출력
 * @param board 게시글 데이터
 * @param boardCategories 게시판 유형 리스트
 * @return 게시판 상세유형 이름
 */

Vue.filter('boardCategoryName', function (board, boardCategories) {
    if (strLib.isNull(board) || boardCategories == null || boardCategories.length === 0)
        return "";

    const category = boardCategories.find(c => c.categoryID === board.detailType);

    return category ? category.categoryName : '';
});

/**
 * 게시판 이름
 * @param boardType 게시판 타입
 * @return 게시판 이름
 */

Vue.filter('boardName', function (boardType) {
    if (strLib.isNull(boardType))
        return "";

    return boardNameType[boardType]||'';
});

Vue.filter('boardFaqType', function (type) {
    if (strLib.isNull(type))
        return "";

    return faqType[type]||'';
})

Vue.filter('boardQnaType', function (type) {
    if (strLib.isNull(type))
        return "";

    return qnaType[type]||'';
})

Vue.filter('boardStateType', function (type) {
    if (strLib.isNull(type))
        return "";

    return boardStateType[type]||'';
})

