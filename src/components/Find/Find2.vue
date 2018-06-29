<template>
    <div>
        <Mheader :search="false" :searchBtn="true">发现</Mheader>
        <div class="scroll-tab">
                <span :class="{active:active[key]}" v-for="(item,key) in tab"  @click="change(key)" >{{item.content}}</span>
        </div>
        <div class="content content1">
            <div>
                <div   v-for='(itemCon,index) in list'  v-show=" index == (recitetypeid-1)">{{itemCon.aa}}</div>
                <div class="top">
                    <a v-for="(val,key) in list" v-if="key<3"><img :src="val.backgroundimg" alt=""><div>{{val.poetrytitle}}</div></a>
                </div>
                <ul class="topList">
                    <li v-for="(val,key) in list" :key="key" v-if="key>2">
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
                    <!--<infinite-loading @infinite="infiniteHandler">-->
                  <!--<span slot="no-more">-->
                    <!--没有更多了~-->
                  <!--</span>-->
                    <!--</infinite-loading>-->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Mheader from '../../base/Mheader.vue'
    import {formatDate} from '../../assets/js/Date'
    import axios from 'axios'
    import InfiniteLoading from 'vue-infinite-loading';
    const url='/api/v1/recite/discover'
  export default{
    data(){
      return {
        active: [true, false, false,false],//统一管理状态;
        tab: [{
          "content": "新作推荐",　　　　//tab-span
          "id": "1"           //仅仅用来存放组件;
        },
          {
            "content": "热播诵读",
            "id": "2"
          },
          {
            "content": "方言诵读",
            "id": "3"
          },
          {
            "content": "儿童诗歌",
            "id": "4"
          }],
        lastid:'',
        recitetypeid:1,
        list:[],
      }
    },
    methods: {
      change:function(x){
        for(var i=0;i<this.active.length;i++){
          this.active[i]=false;
          this.active[x]=true;
          this.recitetypeid=this.tab[x].id;
        }
        this.$set(this.active, this.active.length, 0);
        this.infiniteHandler();
      },
      infiniteHandler($state) {
        axios.get(url,{
          params: {
            'recitetypeid':this.recitetypeid,
            'lastid':this.lastid
          }
        }).then((res) => {
          if (res.data.length) {
            console.log(this.list)
            this.list = this.list.concat(res.data);
            this.lastid=res.data[res.data.length-1].reciteid;
            $state.loaded();
            if (this.list.length < 10) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        });
      }
    },

    computed: {},
    components: { Mheader,
      InfiniteLoading
    }
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
    .top{display: flex;justify-content: space-between;margin: 0.3rem 0.3rem 0.4rem;
        a {position: relative;
            width: 2rem;
            height: 1.5rem;
            color: #333;
            display: block;
            font-size: 0.22rem;
            display: flex;
            justify-content: center;
            text-align: center;
            img{
                position: absolute;top:0;left: 0;width:100%;height: 100%;
            }
            div{position: absolute;top:0;bottom:0;left: 0;padding:0.2rem;display:flex;align-items:center;text-align:center;width: 100%;background: rgba(0,0,0,0.25); color: #fff;font-size: 0.22rem;}
        }
    }
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
    .infinite-loading-container{height:1.3rem!important;}
</style>