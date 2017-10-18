/**
 * 判断对象是否为空
 * @param {*Object} obj 需要判断的对象
 * @return {*Boolen} 为空返回true,不为空返回false
 */
export const isEmptyObject = (obj) => {
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        if (JSON.stringify(obj) !== '{}' && JSON.stringify(obj) !== '[]') {
            return false;
        }
    } else if (Object.keys) {
        if (Object.keys(obj).length !== 0) {
            return false;
        }
    } else {
        for (let key in obj) {
            return false;
        }
    }
    return true;
};
