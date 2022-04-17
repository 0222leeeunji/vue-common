'use strict';

export default {
    //백엔드 api url
    apiUrl : process.env.VUE_APP_API_URL,

    //사이다예약 고객 url
    customerUrl : process.env.VUE_APP_CUSTOMER_URL,

    //이미지 조회 url
    imgUrl : process.env.VUE_APP_IMG_URL,

    //썸네일 이미지 조회 url
    thumbnailUrl : process.env.VUE_APP_THUMBNAIL_URL,

    //oAuth2 인증 클라이언트 ID
    oAuth2ClientID : process.env.VUE_APP_OAUTH_CLIENT_ID,

    //oAuth2 인증 클라이언트 PW
    oAuth2ClientPW : process.env.VUE_APP_OAUTH_CLIENT_PW,

    //oAuth2 인증 url
    oAuth2Url : process.env.VUE_APP_OAUTH_LOGIN_URL,

    //사이다페이 백엔드 rul
    ciderApiUrl : process.env.VUE_APP_CIDER_SERVER_URL,

    //사이다페이 홈페이지 url
    ciderHomeUrl : process.env.VUE_APP_CIDER_BASE_URL,

    //서비스 이름
    serviceNameKor : process.env.VUE_APP_SERVICE_NAME_KOR,
}