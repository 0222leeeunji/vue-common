'use strict';

/**
 * Object Lib
 */
export default {

    /**
     * object 안의 각 요소들을 object로 만들어서 array로 반환
     * object -> [{keyName : key, valueName : value}]
     * @param obj
     * @param keyName
     * @param valueName
     */
    getItemsToObjArr : (obj, keyName, valueName) => {
        const arr = [];

        if(obj == null)
            return arr;

        let newObj = null;

        for(let key of Object.keys(obj)) {
            newObj = {};
            newObj[keyName] = key;
            newObj[valueName] = obj[key];

            arr.push(newObj);
        }

        return arr;
    },

    /**
     * array에 담긴 items들을 object에 담아서 반환
     * @param array 배열
     * @param propertyKey obejct의 key
     * @param valueKey array의 데이터가 object일 경우 담을 value
     */
    arrayToObject(array, propertyKey, valueKey) {
        const obj = {};

        array.forEach(item => {
            if(item instanceof Object)
                obj[item[propertyKey]] = valueKey ? item[valueKey] : item;
            else
                obj[propertyKey] = item;
        });

        return obj;
    },

    /**
     * 객체 복사
     * @param obj 복사할 객체
     * @returns 복사된 데이터
     */
    deepClone(obj) {
        if(obj === null || typeof obj !== 'object')
            return obj;

        const result = Array.isArray(obj) ? [] : {};

        for(let key of Object.keys(obj)) {
            result[key] = this.deepClone(obj[key]);
        }

        return result;
    },
}
