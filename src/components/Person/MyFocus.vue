<template>
    <div>
        <ul>
            <li v-for="(val,key) in focus" :key="key">
                <img :src="val.headportrait" alt="">
                <div class="nickname">
                    <h2>{{val.nickName}}</h2>
                    <span><i class="icon iconfont icon-write"></i>{{val.poetrysCount}}</span>
                    <span><i class="icon iconfont icon-mic"></i>{{val.reciteCount}}</span>
                    <span><i class="icon iconfont icon-fans"></i>{{val.fsCount}}</span>
                </div>
            </li>
            <infinite-loading @infinite="infiniteHandler">
              <span slot="no-more">
                没有更多了~
              </span>
            </infinite-loading>
        </ul>
    </div>
</template>
<script>
  import axios from 'axios'
  import InfiniteLoading from 'vue-infinite-loading'
  const url='/api/v1/user/subscribe/subscribes'

  export default{
    data(){
      return{
        focus:[],
        lastTime:''
      }
    },
    methods: {
      infiniteHandler($state) {
        axios.get(url,{
          params: {
            'userid':'69',
            'lastTime':this.lastTime
          }
        }).then((res) => {
          if (res.data.length) {
            this.focus = this.focus.concat(res.data);
            this.lastTime=res.data[res.data.length-1].createtime;
            $state.loaded();
            if (this.focus.length < 10) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        });
      }
    },
    computed: {},
    components: {InfiniteLoading}
  }
</script>
<style scoped lang="less">
    li{width:100%;padding: 0.38rem 0.3rem 0.25rem;background: #fff;border-bottom: 1px solid #f5f5f5;;display: flex;align-items: flex-start;
        img{display: inline-block; width: 0.7rem;height:0.7rem;border-radius: 50%;}
        .nickname{flex:1;font-size: 0;padding: 0 0.2rem;
            h2{font-size: 0.28rem;color: #14151a;line-height: 1em; margin-bottom: 0.18rem;}
            span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;}
            i{font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
        }
    }
    .infinite-loading-container{height:1.3rem!important;}
</style>