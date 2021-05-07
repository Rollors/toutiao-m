<template>
  <div id="app">
    <h1>黑马头条</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
</style>
