<template>
   <div>
      <ul class="topList">
          <li v-for="(val,key) in recite" :key="key">
              <router-link :to="'#/Detail/?id='+val.reciteid">
                  <div class="img"><img :src="val.backgroundimg" alt=""><i class="icon iconfont icon-play"></i></div>
                  <div class="poemName">
                      <h2>{{val.poetrytitle}}</h2>
                      <span>{{val.uploadtime|formatDate}}</span>
                      <span><i class="icon iconfont icon-erji"></i>{{val.listencount}}</span>
                      <span><i class="icon iconfont icon-heart"></i>{{val.zanCount}}</span>
                  </div>
              </router-link>
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
  import {formatDate} from '../../assets/js/Date'
  import InfiniteLoading from 'vue-infinite-loading';
  const url='/api/v1/user/recite/recites'
  export default{
    data(){
      return {
        recite:[],
        lastid:0
      }
    },

    methods: {
      infiniteHandler($state) {
            axios.get(url,{
              params: {
                'reciteUserid':'62',
                'lastid':this.lastid
              }
            }).then((res) => {
              if (res.data.length) {
                this.recite = this.recite.concat(res.data);
                this.lastid=res.data[res.data.length-1].reciteid;
                  $state.loaded();
                if (this.recite.length < 10) {
                  $state.complete();
                }
              } else {
                $state.complete();
              }
            });
          }
    },
    filters:{
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    computed: {},
    components: {InfiniteLoading}
  }
</script>
<style scoped lang="less">
   li a{width:100%;padding: 0.38rem 0.3rem 0.25rem;background: #fff;border-bottom: 1px solid #f5f5f5;;display: flex;align-items: flex-start;font-size: 0;
       .img{position:relative;display: inline-block; width: 0.72rem;height:0.72rem;
           img{width:100%;border-radius: 50%;}
           i{position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%);color: #fff;width: 100%;height: 100%;background: rgba(0,0,0,0.25);
               border-radius: 50%;text-align: center;line-height: 0.72rem;font-size: 0.2rem;}
       }
       .poemName{flex:1;font-size: 0;padding: 0 0.2rem;
         h2{font-size: 0.28rem;color: #14151a;line-height: 1em;    height: 1em;overflow: hidden; margin-bottom: 0.18rem;}
         span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;}
         i{font-style:normal;font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
      }
   }
   .infinite-loading-container{height:1.3rem!important;}
</style>