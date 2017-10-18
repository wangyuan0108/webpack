/**
 * 对象深拷贝
 * @param {*Object} obj 需要拷贝的对象
 * @return {*Object}
 */
export const deepClone = (obj) => {
    let str = '';
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj); // 系列化对象
        newobj = JSON.parse(str); // 还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return newobj;
};
