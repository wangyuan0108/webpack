/**
 * 生成父子树
 * @param {*Array} list 需要拷贝的对象
 * @param {*Number} pid 树根节点
 * @return {*Array}
 */
export const buildTree = (list, pid = 0) => {
    let tree = [];
    list.forEach(item => {
        if (Number(item.pid) === Number(pid)) {
            tmp['children'] = buildTree(list, item.id);
            tree.push(tmp);
        }
    });
    return tree;
};
