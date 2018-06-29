<template>
    <div class="writePoem">
        <Mheader :news="false" :back="true" :write="true">评论管理</Mheader>
        <div class="content content1">
            <ul>
                <li><router-link to="/Detail">
                    <span>静待花开：读的太棒了</span>
                    <div class="poemImg">
                        <img src="../../../assets/1.jpg" alt="">
                        回忆里回不去的青春往事
                    </div>
                </router-link></li>
                <li><router-link to="/Detail">
                    <span>静待花开：读的读的太棒了读的太棒了读的太棒了读的太棒了读的太棒了读的太棒了读的太棒了读的太棒了读的太棒了读的太棒了太棒了</span>
                    <div class="poemImg">
                        <img src="../../../assets/1.jpg" alt="">
                        回忆里回不去的青春往事
                    </div>
                </router-link></li>
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
    ul>li{font-size: 0.28rem;border-bottom:1px solid #f4f4f4;padding:0.3rem;
    a{color: #999}
    span{margin-right: 0.1rem;color:#333;}
        .poemImg{font-size: 0.24rem;color: #333;display: flex;align-items: center;background: #f1f1f1;margin-top: 0.2rem;
        img{width: 1.2rem;height:0.9rem;margin-right: 0.15rem}}
    }
</style>