<template>
    <div class="detail">
        <Mheader :news="false" :back="true" :collect="true"></Mheader>
        <div class="content content1"  :style="bgImg">
            <div class="poem" >
                <h2>秋天我去寻找秦人的足迹</h2>
                <span>作者：洪启罗</span><span>/ 发布者：博客中国</span>
                <p>花到三春无骄娆，<br>
                    阳过正午明媚少。<br>
                    岁月如梭转瞬逝，<br>
                    光阴似箭催人老。<br>
                    人生苦短花上露，<br>
                    一叶知秋无春貌。<br>
                    漫漫三万几多日？<br>
                    流年惜时不徒劳。<br>
                    诗歌:《一叶知秋》<br>
                    当梧桐的音符开始飘荡<br>
                    我想 秋天算是真的来了吧<br>
                    我似乎听到了远方的山林里<br>
                    传来隐约而清晰的箫声<br>
                    悠扬而凄美 婉转而迷离<br>
                    原来不只是秋风萧瑟<br>
                    连箫声也渲染上萧瑟<br>
                    叶子在风中颤抖<br>
                    失去了翠绿的容颜<br>
                    带着太多的眷恋殆落<br></p>
            </div>
            <div class="record" style="display: none">
                <div>
                    <button><i class="icon iconfont icon-mic"></i></button>
                </div>
                <span>这首诗还没有人朗诵，您是第一个！</span>
            </div>
            <div class="record">
                <div class="loading"><span></span></div>
                <div class="time"><span class="current">01'02</span>| <span>03'12''</span></div>
                <div class="btn">
                    <div  class="refresh"><button><i class="icon iconfont icon-refresh"></i></button><span>重录</span></div>
                    <button class="mic">
                        <i class="icon iconfont icon-mic"></i>
                        <i class="icon iconfont icon-pause"></i>
                        <i class="icon iconfont icon-play"></i>
                    </button>
                    <div class="check"><button><i class="icon iconfont icon-check"></i></button><span>发布</span></div>
                </div>
                <span class="text">我来朗诵</span>
                <router-link to="/SearchPoem">换首诗歌来读~</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Mheader from '../../base/Mheader.vue'
    import LangsongList from '../Poem/LangsongList.vue'
    import SearchPoem from '../Search/SearchPoem.vue'
  export default{
    data(){
      return {
        show:{
          type:Boolean,
          default:false
        },
        isShow:false,
        bgImg:{
          backgroundImage: "url(" + require("../../assets/writeBg.jpg") + ")",
        }
      }
    },
    methods: {
      hideList(){
        var _self=this;
        this.isShow =!this.isShow;
      },
      showList(){
        var _self=this;
        this.isShow=!this.isShow;
      }
    },
    computed: {},
    components: {Mheader,LangsongList}
  }
</script>
<style scoped lang="less">
    .header1{box-shadow: none!important;}
    .content1{bottom:0!important;padding: 0;top:0.88rem;background-color:#fff;background-size: contain;background-position: center bottom;background-repeat: no-repeat;}
    .poem{height: 70vh; font-size:0;padding: 0.88rem 0.3rem;  color: #14151a;text-align: center;  position: fixed; width: 100%; overflow: auto;top: 0.88rem;
        h2{font-size: 0.36rem;margin-bottom: 0.2rem;}
        span{font-size: 0.2rem;margin-bottom: 0.8rem;display: inline-block}
        p{font-size: 0.28rem;line-height: 2em}
    }
    .record{position: fixed;left: 0;bottom: 0;width: 100%;height: 23vh;padding-bottom:0.75rem;
        .text{display:block;text-align:center;font-size: 0.2rem;color:#14151a}
        a{position: fixed;bottom: 0.3rem;right: 0.3rem;font-size: 0.24rem;color:#f54e2c}
        .btn{display:flex;justify-content: space-around; align-items:center;margin: 0 0.75rem 0.3rem;
            button{background:#f54e2c;border-radius:50%;
                i{font-size:0.55rem;color:#fff}
                span{font-size: 0.2rem;color:#808080}
            }
            .mic{ width:1.02rem;height:1.02rem;}
            .refresh,.check{font-size: 0;text-align: center;
                span{font-size: 0.2rem;color:#808080;display: block}
            }
            .refresh button,.check button{ width:0.62rem;height:0.62rem;margin: 0.05rem 0;
                i{font-size:0.4rem; }
            }
        }
        .loading{width: 100%;height:0.06rem;background: #a4a4a4;
            span{height: inherit;background: #f54e2c;width: 20%;display: block}
        }
        .time{text-align: center;    height: 0.69rem; line-height: 0.69rem;font-size: 0.2rem;color: #333;font-family: Arial;color: #a4a4a4;
            span.current{padding: 0 0.15rem;color: #f54e2c;}
        }
    }


</style>