<template>
    <div>
        <div class="content content1">
            <Mheader :back="true" :news="false" :share="true"></Mheader>
            <div class="person">
                <img :src="personInfo.headportrait" alt="">
                <h2>{{personInfo.nickname}}</h2>
                <ul><li><span>{{personInfo.poetrysCount}}</span>诗歌</li>|<li><span>{{personInfo.reciteCount}}</span>朗诵</li>|<li><span>{{personInfo.followCount}}</span>粉丝</li></ul>
                <p>{{personInfo.selfintroduction}}</p>
                <button v-if="isFollow" @click="follow(isFollow)"><i class="icon iconfont icon-plus"></i></button>
                <button  v-if="unFollow"  @click="follow(!unFollow)"><i class="icon iconfont icon-check"></i></button>
                <div class="imgBg"  :style="bgImg" ></div>
            </div>
            <div class="tabList">

            <div class="scroll-tab">
                <span   :class="{active:active[key]}"   v-for="(item,key) in tab" @click="change(key)">{{item.content}}</span>
            </div>
            <div>
                <compontent :is="who"></compontent>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../base/Mheader.vue'
  import  Myls from './Myrecite.vue'
  import  MyPoem from './MyPoem.vue'
  import  MyFocus from './MyFocus.vue'
  import axios from 'axios'
  export default{
    data(){
      return {
        who: "Myls",　　　　　　　　　　//默认第一次显示;
        active: [true, false,false],//统一管理状态;
        tab: [{
          "content": "朗诵",　　　　//tab-span
          "func": "Myls"           //仅仅用来存放组件;
        },
          {
            "content": "诗歌",
            "func": "MyPoem"
          },
          {
            "content": "关注",
            "func": "MyFocus"
          },
        ],
        bgImg:{
          backgroundImage: "url(" + require("../../assets/bg1.jpg") + ")",
        },
        personInfo:[],
        isFollow:true,
        unFollow:false
      }
    },
    created(){
      this.person()
    },
    methods: {
      change:function(x){
        for(var i=0;i<this.active.length;i++){
          this.active[i]=false;
          this.active[x]=true;
          this.who=this.tab[x].func;
        }
        this.$set(this.active, this.active.length, 0);
      },
      person(){
        axios.get('/api/v1/user/person/49').then(res=>{
          this.personInfo =res.data;
        })
      },
      follow(m){
        if (m) {
          this.m = 'y';
        } else
          this.m = 'n'
        axios.post('/api/v1/user/follow',{
          params:{isFollow:m,userid:2,subuserid:1}}).then(res=>{
            console.log(res);
            this.unFollow=!this.unFollow;
            this.isFollow=!this.isFollow;
          }

        )
      }
    },
    computed: {},
    components: {Mheader,Myls,MyPoem,MyFocus}
  }
</script>
<style scoped lang="less">
    .header1{background: transparent!important;box-shadow: none!important;color: #fff!important; }
    .content1{top:0!important;bottom:0!important;padding: 0;z-index: 1}
    .imgBg{position: absolute;top:0;left:0;z-index: -1;width: 100%;height: 2rem;background-size: cover;background-position: center }
    .person {position:relative;z-index:0;padding: 0.88rem 0.3rem 0.3rem;height: 45vh;font-size: 0.2rem;text-align: center;background: #fff;
        img {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
            border: 5px solid rgba(247,258, 242,0.8);
        }
        h2{font-size: 0.28rem;    margin-top: 0.2rem;}
        ul{ display: flex;justify-content: center;align-items: center;color: #666;margin-top: 0.3rem;
            li{margin: 0 0.15rem;
                span{margin-right: 0.15rem;font-family: arial; }
            }
        }
        p {margin-top:0.3rem;line-height: 1.5em; color: #666;display:-webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;
        }
        button{ margin: 0.4rem 0 0.2rem;width: 1rem; height: 0.4rem;font-weight: bolder; color: #fff;background: #14151a;border-radius: 60px;
            i{ display: block;  font-style: normal;  color: #999; font-size: 0.2rem;}
        }
    }
    .tabList{position: fixed;top:calc(45vh + 0.25rem);margin-top: 0.25rem;width: 100%;
    .scroll-tab{position: fixed;top: calc(45vh + 0.25rem); border-bottom:1px solid #f5f5f5; margin-top: 0.25rem;width: 100%; background: #fff;height: 0.64rem; font-size: 0.24rem;  display: flex; justify-content: space-around;
        align-items: center; padding: 0 0.2rem;line-height: 0.64rem;
        span{display: inline-block;}
        span.active{
            color: #f54e2c;
            border-bottom: 2px solid #f54e2c;
        }
        input{min-width: 15em;padding: 0 0.2rem;}
        input,button{    border: none;outline: none;background: transparent}
    }
    .scroll-tab+div{position: fixed;top: calc(45vh + 0.89rem); height: calc(52vh - 0.25rem); margin-top: 0.8rem;width: inherit;overflow: auto}
    }

</style>