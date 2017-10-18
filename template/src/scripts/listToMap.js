import { deepClone } from './deepClone';
/**
 * 将数组转化为对象
 * @param {*Array} list 需要转化的数组
 * @param {*String} key 生成map的key
 * @return {*Object}
 */
export const listToMap = (list, key) => {
    let map = {};

    let listTemp = deepClone(list);

    listTemp.forEach(item => {
        map[item[key]] = item;
    });

    return map;
};
