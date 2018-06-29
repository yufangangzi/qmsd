<template>
   <div>
      <ul class="topList">
          <li v-for="(val,key) in poem" :key="key">
            <a>
               <div class="poemName">
                  <div><h2>{{val.title}}</h2><span>{{val.createtime|formatDate}}</span></div>
                  <span><i class="icon iconfont icon-mic"></i>{{val.recitecount}}</span>
                  <span><i class="icon iconfont icon-comment"></i>{{val.commentcount}}</span>
                  <span><i class="icon iconfont icon-collect"></i>{{val.collectCount}}</span>
               </div>
            </a>
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
  const url='/api/v1/user/poetry/poetrys'
  export default{
    data(){
      return {
        poem:[],
        lastid:0
      }
    },
    methods: {
      infiniteHandler($state) {
        axios.get(url,{
          params: {
            'userid':'0',
            'lastid':this.lastid
          }
        }).then((res) => {
          if (res.data.length) {
            this.poem = this.poem.concat(res.data);
            this.lastid=res.data[res.data.length-1].reciteid;
            $state.loaded();
            if (this.poem.length / 10 === 1) {
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
       .poemName{flex:1;font-size: 0;
         div{display: flex;justify-content: space-between;
         span{margin-right: 0;}}
         h2{font-size: 0.28rem;color: #14151a;line-height: 1em;    height: 1em;overflow: hidden; margin-bottom: 0.18rem;}
         span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;}
         i{font-style:normal;font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
      }
   }
   .infinite-loading-container{height:1.3rem!important;}

</style>