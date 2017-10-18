<template>
    <div class="app">
        {{#router}}
        <router-view></router-view>
        {{/router}}
    </div>
</template>

<script>
export default {};
</script>

<style>
.app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>
