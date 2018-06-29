// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
//导入滚动加载组件
import InfiniteLoading from 'vue-infinite-loading';
//使用轮播图组件
Vue.use(VueAwesomeSwiper)
//使用滚动加载组件
Vue.use(InfiniteLoading)


import 'swiper/dist/css/swiper.css';
// import './components/Poem/APlayer.min'
import './assets/APlayer.min.css';
import './components/Poem/APlayer.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
