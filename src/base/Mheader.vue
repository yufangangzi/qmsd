<template>
    <div class="header header1">
        <i class="icon iconfont icon-back" v-if="back" @click="goBack"></i>
        <button v-if="news" class="icon iconfont icon-news"></button>
        <input  v-if="search" type="text" value="搜索朗诵、诗歌、感兴趣的人">
        <slot></slot>
        <button class="icon iconfont icon-search" v-if="searchBtn" @click="searchPage"></button>
        <button class="icon iconfont icon-search" v-if="searchBtn1" ></button>
        <i class="icon iconfont icon-set" v-if="set" @click="goSet"></i>
        <i class="icon iconfont icon-share" v-if="share" ></i>
        <i class="icon iconfont icon-collect" v-if="collect" ></i>
        <router-link to='/write' class="write" v-if="write" >我要写诗</router-link>
    </div>
</template>
<script>
  export default{
    props:{
      news:{
        type:Boolean,
        default:true
      },
      back:{
        type:Boolean,
        default:false
      },
      set:{
        type:Boolean,
        default:false
      },
      search:{
        type:Boolean,
        default:false
      },
      searchBtn:{
        type:Boolean,
        default:false
      },
      searchBtn1:{
        type:Boolean,
        default:false
      },
      share:{
        type:Boolean,
        default:false
      },
      write:{
        type:Boolean,
        default:false
      },
      collect:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {}
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      goSet(){
        alert('跳转页面')
      },
      searchPage(){
        var _this=this;
       this.$router.push({name: 'Search'});
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    .header{
        position: fixed;
        top:0;
        left: 0;
        z-index: 1;
        width: 100%;
        background: #fff;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.34rem;
        text-align: center;
        font-weight: 500;
        box-shadow: 0px 1px 3px rgba(0,0,0,0.13);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.3rem;
        color: #14151a;
        input{
            background: #f7f7f7;
            border: none;
            height: 0.42rem;
            border-radius: 110px;
            padding: 0 0.3rem;
            width: 76vw;
            font-size: 0.2rem;
            color: #666;
        }
    button,i{
        font-size: 0.3rem;
    }
    }
    .write{font-size: 0.2rem; color: #f54e2c;}

</style>