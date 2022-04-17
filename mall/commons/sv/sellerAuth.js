'use strict';

import strLib from '@/commons/lib/strLib'

export default {
  name: 'auth',
  sellerCheck() {
    return strLib.isNotNull(localStorage.getItem("sellerToken"));
  },
  sellerLayoutCheck() {
    return location.pathname !== '/'
      && location.pathname.indexOf('join') < 0
      && location.pathname.indexOf('close') < 0;
  }
}
