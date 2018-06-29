<template>
    <div>
        <Mheader :search="false" :searchBtn="true">发现</Mheader>
        <div class="scroll-tab">
           <span :class="{active:active[key]}" v-for="(item,key) in tab"  @click="change(key)">{{item}}</span>
        </div>
        <div class="content content1">
            <keep-alive>
                <LangsongList :recitetypeid="recitetypeid"  v-if="recitetypeid==1" ref="LangsongList"></LangsongList>

                <!--<LangsongList  :recitetypeid="recitetypeid" v-if="recitetypeid==1" ref="LangsongList"></LangsongList>-->
                <!--<LangsongList  :recitetypeid="recitetypeid" v-if="recitetypeid==2" ref="LangsongList"></LangsongList>-->
                <!--<LangsongList  :recitetypeid="recitetypeid" v-if="recitetypeid==3" ref="LangsongList"></LangsongList>-->
                <!--<LangsongList  :recitetypeid="recitetypeid" v-if="recitetypeid==4" ref="LangsongList"></LangsongList>-->
            </keep-alive>
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
        active: [true, false, false,false],//统一管理状态;
        tab: ["新作推荐","热播诵读","方言诵读","儿童诗歌"],
        recitetypeid:'1',
      }
    },
    methods: {
      change:function(x){
        for(var i=0;i<this.active.length;i++){
          this.active[i]=false;
          this.active[x]=true;
          this.recitetypeid=x+1;
        }
        this.$set(this.active, this.active.length, 0);
        this.$refs.LangsongList.changeFilter("ssss");
        console.log(this.$children);
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