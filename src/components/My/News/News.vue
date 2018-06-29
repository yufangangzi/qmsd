<template>
    <div class="writePoem">
        <Mheader :news="false" :back="true" :write="true">消息管理</Mheader>
        <div class="content content1">
            <ul>
                <li><router-link to="/Detail"><span>静待花开：</span>赞了 <span class="name">《捉泥鳅》</span></router-link></li>
                <li><router-link to="/Detail"><span>佛系大宅男：</span>收藏了 <span class="name">《捉泥鳅》</span></router-link></li>
                <li><router-link to="/Detail"><span>佛系大宅男：</span>转发了 <span class="name">《捉泥鳅》</span></router-link></li>
                <li><router-link to="/Detail"><span>系统通知：</span>您的 <span class="name">《捉泥鳅》</span>被推荐至首页</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../../base/Mheader.vue'
  export default{
    data(){
      return {
      }
    },
    methods: {
    },

    computed: {
    },
    components: {Mheader,}
  }
</script>
<style scoped lang="less">
    html,body{height: 100%}
    .content1{top:1.08rem;background: #fff}
    ul>li{font-size: 0.28rem;border-bottom:1px solid #f4f4f4;line-height:3.2em;padding:0 0.3rem;
    a{color: #999}
    span{margin-right: 0.1rem;color:#333}
    .name{color:#f54e2c}}
</style>