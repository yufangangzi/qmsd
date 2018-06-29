<template>
   <div>
       <!--<div class="top">-->
           <!--<a v-for="(val,key) in list" v-if="key<3"><img :src="val.backgroundimg" alt=""><div>{{val.poetrytitle}}</div></a>-->
       <!--</div>-->
       <ul class="topList">
           <li v-for="(val,key) in list" :key="key" >
               <a>
                   <div class="img"><img :src="val.backgroundimg" alt=""><i class="icon iconfont icon-play"></i></div>
                   <div class="poemName">
                       <h2>{{val.poetrytitle}}</h2>
                       <span>{{val.recitenickname}} | {{val.uploadtime|formatDate}}</span>
                       <span><i class="icon iconfont icon-mic"></i>{{val.listencount}}</span>
                       <span><i class="icon iconfont icon-heart"></i>{{val.zanCount}}</span>
                   </div>
               </a>
           </li>
           <infinite-loading @infinite="infiniteHandler"  ref = "infiniteLoading" >
           <span slot="no-more">
           没有更多了~
           </span>
           </infinite-loading>
       </ul>

      </div>
</template>
<script>
  import axios from 'axios'
  import InfiniteLoading from 'vue-infinite-loading';
  import {formatDate} from '../../assets/js/Date'
  const url='/api/v1/recite/discover'
  export default{
//    name:'test-keep-alive',
    props:['recitetypeid'],
    data(){
      return {
        lastid:'',
        list:[],
        recitetypeid:1
      }
    },
    created(){
      console.log(this.recitetypeid)
    },
    watch: {
      'recitetypeid': function (newVal, oldVal) {
        this.infiniteHandler();
      }
    },
    methods: {
     infiniteHandler($state) {
        axios.get(url,{
          params: {
            'recitetypeid':this.recitetypeid,
            'lastid':this.lastid
          }
        }).then((res) => {
          console.log("bb")
          if (res.data.length) {
            this.list = this.list.concat(res.data);
            this.lastid=res.data[res.data.length-1].reciteid;
            if ($state) {
              $state.loaded();
            }
            if (this.list.length < 10) {
              if ($state) {
                $state.complete();
              }
            }
          } else {
            if ($state) {
              $state.complete();
            }
          }
        });
      },
      //      父组件tab切换触发子组件changeRest方法
      changeFilter(x) {
        console.log('aa')
        this.list = [];
        this.lastid='';
//        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      },
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

   li a{width:100%;padding: 0.38rem 0.3rem 0.25rem;background: #fff;border-top: 1px solid #f5f5f5;;display: flex;align-items: flex-start;font-size: 0;
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
   /*li a:nth-child(0), li a:nth-child(1), li a:nth-child(2){display: flex;justify-content: space-between;margin: 0.3rem 0.3rem 0.4rem;*/
       /*a {position: relative;*/
           /*width: 2rem;*/
           /*height: 1.5rem;*/
           /*color: #333;*/
           /*display: block;*/
           /*font-size: 0.22rem;*/
           /*display: flex;*/
           /*justify-content: center;*/
           /*text-align: center;*/
           /*img{*/
               /*position: absolute;top:0;left: 0;width:100%;height: 100%;*/
           /*}*/
           /*div{position: absolute;top:0;bottom:0;left: 0;padding:0.2rem;display:flex;align-items:center;text-align:center;width: 100%;background: rgba(0,0,0,0.25); color: #fff;font-size: 0.22rem;}*/
       /*}*/
   /*}*/
   .infinite-loading-container{height:1.3rem!important;}

</style>