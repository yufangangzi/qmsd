<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue';
  export default {
    name: 'App',
    components:{
      Tab
    },
  }
</script>

<style>
    html,body,#app{height: 100%;background:#F7F8FC }
  *{margin: 0;padding: 0;list-style: none;outline:none;font-weight:normal;box-sizing: border-box;font-family: "Helvetica Neue", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif}
  a{text-decoration: none}
  input,button{ -webkit-appearance: none;background:none;border: none}
  .content{position: fixed;top:0.88rem;left: 0;bottom:1rem;overflow:auto;width: 100%;padding: 0.2rem 0;background: #F7F8FC;}
  .content1{top:1.72rem;    padding: 0;}
  .poem .content{bottom: 0;z-index: 1}
  .writePoem .content{bottom: 0;z-index: 1}
  .declaim .poem .content{bottom: 1rem;z-index: 0}
  .detail+ .footer{display: none!important;}
  .writePoem .write{visibility: hidden!important;}
</style>
