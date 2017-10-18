const base = [{
    path: '/',
    component: (resolve) => {
        require.ensure(['~views/index'], (require) => {
            resolve(require('~views/index'));
        });
    }
}];

export default base;
