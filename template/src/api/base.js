import axios from './axios';

/**
 * axios实现fetch
 * @param {*Object} conf axios的config
 * @param {*Function} cb 成功响应处理函数
 * @return {*Promise}
 */
export const fetch = (conf) => (cb) => {
    return axios(conf).then(res => {
        cb(res.data.data, res.data.msg);
    }).catch(err => {
        if (err.data && err.data.msg) {
            console.log('fetchError =>', err.data.msg);
        } else {
            console.log('fetchError =>', err);
        }
    });
};

/**
 * axios实现post
 * @param {*Object} conf axios的config
 * @param {*Function} cb 成功响应处理函数
 * @param {*Function} errCb 失败响应处理函数
 * @return {*Promise}
 */
export const post = (conf) => (cb) => (errCb) => {
    return axios(conf).then(res => {
        cb(res.data.data, res.data.msg);
    }).catch(err => {
        if (err.data && err.data.msg) {
            errCb(err.data.msg);
            console.log('postError =>', err.data.msg);
        } else {
            errCb('系统错误！');
            console.log('postError =>', err);
        }
    });
};
