<template>
    <div>
    <Mheader :back="false"  :search="true"  :searchBtn="true"></Mheader>
        <div class="content">
            <swiper :options="swiperOption" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in poems" :key="index" >
                    <router-link :to="{path:'Detail'}" class="author">
                        <h2 class="pomeTitle">{{item.poemTitle}}</h2>
                        <span>作者：{{item.nickName}}</span> / <span><router-link :to="{path:'Person'}">朗诵者：博客中国</router-link></span>
                        <i><span class="num">1236</span> 人试听</i>
                        <button @click="follow(item)" v-if="!item.follow"><i class="icon iconfont icon-plus"></i></button>
                        <button @click="follow(item)" v-else><i class="icon iconfont icon-check"></i></button>
                    </router-link>
                    <div class="img">
                        <img :src=item.avatar alt="">
                    </div>
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>
<script>
    import Mheader from '../base/Mheader.vue'
    import {getHome} from '../api'
    export default {
      name: 'carousel',
      data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay:3500,
            setWrapperSize:true,
            observeParents:true,
          },poems:[],
        }
      },
      created(){
        this.showPoem();
      },
      methods:{
        async showPoem(){
          this.poems=await getHome()
        },
        follow(n){
          n.follow=true;
        }
      },
      components:{
        Mheader
      }
    }
</script>
<style scoped lang="less">
    .swiper-container{margin: 0 0.2rem;background: #fff;height: 100%;text-align: center}
    .pomeTitle{font-size: 0.36rem}
    .author{
        padding: 1.6rem 0.2rem 0;
        height: 50%;
        font-size: 0.2rem;
        span{display:inline-block;margin: 0.3rem 0 0.5rem;color: #999;}
        i{display: block;font-style: normal;color: #999;font-size: 0.2rem;
        span.num{font-size: 0.26rem;color: #14151a;font-family: "Arial";margin:0}
        }
        button{ margin: 0.4rem 0 0.2rem; width: 1.6rem;height:0.5rem;font-weight:bolder;color: #fff; background: #14151a; border-radius: 60px;
        }
    }
    .img{
        position: relative;
        height: 50%;
        top: 0;
        overflow: hidden;
        img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width: 100%}
    }

</style>