import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

process.env.NODE_ENV !== 'production' && Vue.use(Router);

export default new Router({
    routes
});
