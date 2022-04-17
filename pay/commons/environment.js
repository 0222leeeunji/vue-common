'use strict';

export default {
    //백엔드 api url
    apiUrl : process.env.VUE_APP_API_URL,

    //홈페이지 url
    baseUrl : process.env.VUE_APP_BASE_URL,

    //oAuth2 인증 클라이언트 ID
    oAuth2ClientID : process.env.VUE_APP_CLIENT_ID,

    //oAuth2 인증 클라이언트 PW
    oAuth2ClientPW : process.env.VUE_APP_CLIENT_PW,

    //oAuth2 인증 url
    oAuth2Url : process.env.VUE_APP_LOGIN_AUTH_URL,

    //이미지 섬네일 url
    imgThumbUrl : process.env.VUE_APP_IMG_THUMBNAIL_URL,

    //서비스 이름(한글)
    serviceNameKor : process.env.VUE_APP_SERVICE_NAME_KOR,

    //paynapi 로그인 url
    paynapiLoginUrl : process.env.VUE_APP_PAYNAPI_LOGIN_URL,

    csPhoneNumber : process.env.VUE_APP_CS_PHONE_NUMBER,
}