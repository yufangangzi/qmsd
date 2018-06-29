<template>
   <div>
      <router-link :to="link"><slot></slot>{{dir}}<span class="num" v-show="news">99+</span><i class="iconfont icon-right-arrow"></i></router-link>
   </div>
</template>
<script>
  export default{
    props:{
      dir:{},
      link:{},
      news:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    a {
        width: 100%;
        color: #333;
        line-height: 3.2em;
        display: block;
        padding: 0 0.3rem;
        border-bottom: 1px solid #f1f1f1;
        span.num{
            padding: 0.02rem 0.1rem;
            background: red;
            color: #fff;
            font-size: 0.2rem;
            border-radius: 15px;
            margin-left: 0.2rem;
        }
        i{float: right;font-size: 0.28rem;color: #ddd;}
    }
</style>