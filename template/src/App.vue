<template>
    <div class="app"{{#locale}} :class="{ 'en-wrapper': $lang === 'en'}"{{/locale}}>
        {{#router}}
        <router-view></router-view>
        {{/router}}
    </div>
</template>

<script>
{{#locale}}
import Vue from 'vue';
{{/locale}}
export default {
    {{#locale}}
    created() {
        if (window.language === 'en') {
            Vue.config.lang = 'en';
        } else {
            Vue.config.lang = 'zh';
        }
    }
    {{/locale}}
};
</script>

<style>
.app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>
