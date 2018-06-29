<template>
    <div>
        <Mheader :search="false" :searchBtn="true">发现</Mheader>
        <div class="scroll-tab">
           <span :class="{active:active[key]}" v-for="(item,key) in tab"  @click="change(key)">{{item.content}}</span>
        </div>
        <div class="content content1">
            <!--<component :is="who" ></component>-->
            <langsongList>111</langsongList>
            <langsongList>222</langsongList>
            <langsongList>333</langsongList>
            <langsongList>444</langsongList>
        </div>
    </div>
</template>
<script>
    import Mheader from '../../base/Mheader.vue'
    import LangsongList from './LangsongList.vue'
    import HotList from './HotList.vue'
  export default{
    data(){
      return {
        who: "LangsongList",　　　　　　　　　　//默认第一次显示;
        active: [true, false, false],//统一管理状态;
        tab: [{
          "content": "新作推荐",　　　　//tab-span
          "func": "LangsongList"           //仅仅用来存放组件;
        },
          {
            "content": "热播诵读",
            "func": "HotList"
          },
          {
            "content": "方言诵读",
            "func": "LangsongList"
          },
          {
            "content": "儿童诗歌",
            "func": "LangsongList"
          }],
      }
    },
    methods: {
      change:function(x){
        for(var i=0;i<this.active.length;i++){
          this.active[i]=false;
          this.active[x]=true;
//          this.who=this.tab[x].func;
        }
        this.$set(this.active, this.active.length, 0);
      },

    },
    computed: {},
    components: { Mheader,LangsongList,HotList}
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