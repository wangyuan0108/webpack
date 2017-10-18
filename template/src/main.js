{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import '~styles';
import Vue from 'vue';
import api from '~api';
import constant from '~constant';
{{#store}}
import store from '~store';
{{/store}}
{{#router}}
import router from '~router';
{{/router}}
{{#mobile}}
import FastClick from 'fastclick';
{{/mobile}}
import App from './App';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$const = constant;
{{#mobile}}
FastClick.attach(document.body);
{{/mobile}}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {{#store}}
    store,
    {{/store}}
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    template: '<App/>',
    components: { App }
    {{/if_eq}}
});
