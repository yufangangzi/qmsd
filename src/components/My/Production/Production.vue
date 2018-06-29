<template>
    <div class="poem">
        <Mheader :news="false" :back="true" :write="true">我的作品</Mheader>
        <div class="scroll-tab">
            <span   :class="{active:active[key]}"   v-for="(item,key) in tab" @click="change(key)">{{item.content}}</span>
        </div>
        <div class="content content1">
            <compontent :is="who"></compontent>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../../base/Mheader.vue'
  import ProPoem from './ProPoem.vue'
  import ProLangsong from './ProLangsong.vue'
  export default{
    data(){
      return {
        who: "ProLangsong",　　　　　　　　　　//默认第一次显示;
        active: [true, false],//统一管理状态;
        tab: [
          {
            "content": "我的朗诵",
            "func": "ProLangsong"
          },{
          "content": "我的诗歌",　　　　//tab-span
          "func": "ProPoem"           //仅仅用来存放组件;
        },

       ]
      }
    },
    methods: {
      change:function(x){
        for(var i=0;i<this.active.length;i++){
          this.active[i]=false;
          this.active[x]=true;
          this.who=this.tab[x].func;
        }
        this.$set(this.active, this.active.length, 0);
      }
    },

    computed: {
    },
    components: {Mheader,ProLangsong,ProPoem}
  }
</script>
<style scoped lang="less">
    html,body{height: 100%}
    .scroll-tab{position: fixed;top:1.08rem;width: 100%;
        background: #fff;
        height: 0.64rem;
        font-size: 0.24rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 0.2rem;
        line-height: 0.64rem;
        span{display: inline-block;}
        span.active{
            color: #f54e2c;
            border-bottom: 2px solid #f54e2c;
        }
        input{min-width: 15em;padding: 0 0.2rem;}
        input,button{    border: none;outline: none;background: transparent}
    }

</style>