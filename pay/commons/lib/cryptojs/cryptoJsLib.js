'use strict';

import cryptojs from 'crypto-js';

const PBKDF2_IV = '6aaa0692ada8744ec711940aa1d6ea86';
const PBKDF2_SALT = '555f7e094872c827997c38aa66615196';
const PBKDF2_KEY_SIZE = 128;
const PBKDF2_ITERATION_CNT = 10000;
const PBKDF2_PASS_PHARSE = '7522115';

/**
 * crypto-js lib
 */
export default {

    pbkdf2_encrypt(pl) {
        const key = cryptojs.PBKDF2(
            PBKDF2_PASS_PHARSE,
            cryptojs.enc.Hex.parse(PBKDF2_SALT),
            { keySize: PBKDF2_KEY_SIZE / 32, iterations: PBKDF2_ITERATION_CNT }
        );

        return cryptojs.AES.encrypt(pl, key, {iv: cryptojs.enc.Hex.parse(PBKDF2_IV)}).toString();
    }

}
