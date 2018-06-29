<template xmlns="http://www.w3.org/1999/html">
    <div class="detail">
        <Mheader :news="false" :back="true" :share="true"></Mheader>
        <div class="content content1"  :style="bgImg">
            <div class="aplayer-info" >
                <h2>秋天我去寻找秦人的足迹</h2>
                <span>作者：洪启罗</span><span>/ 发布者：博客中国</span>
                <div class="aplayer-lrc">
                    <div class="aplayer-lrc-contents">花到三春无骄娆，<br>
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
                    带着太多的眷恋殆落<br></div>
                </div>
            </div>
            <div class="aplayer-controller">
                <div class="loading"><span></span></div>
                <div class="time"><span class="current">01'02</span>| <span>03'12''</span></div>
                <a>
                    <div class="img"><img src="../../assets/avatar.jpg" alt=""><i class="icon iconfont icon-play"></i></div>
                    <div class="poemName">
                        <h2>静待花开可缓缓开矣</h2>
                        <span>36分钟之前</span>
                    </div>
                    <button><i class="icon iconfont icon-plus"></i></button>
                </a>
            </div>
        </div>

        <div  class="List">
            <div class="btn">
                <div class="icon"><button @click="showList"><i  class="icon iconfont icon-help"></i>朗诵列表</button>
                    <div class="loader3">
                        <span></span>
                        <span></span>
                        <i class="icon iconfont icon-mic"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="data">
            <input type="text" value="写下您的评论吧~">
            <ul>
                <li class="icon iconfont icon-comment"><i>999+</i></li>
                <li class="icon iconfont icon-erji"><i>125</i></li>
                <li class="icon iconfont icon-heart"><i>299</i></li>
            </ul>
        </div>
        <div  class="List1" :class="isShow ? 'showUl' : 'hideUl' " >
            <div class="btn">
                <div class="icon"><button @click="hideList"><i  class="icon iconfont icon-back"></i></button>
                    <div class="loader3">
                        <span></span>
                        <span></span>
                        <i class="icon iconfont icon-mic"></i>
                    </div>
                    <i class="icon iconfont icon-collect" v-if="show"></i>
                </div>
            </div>
            <LangsongList></LangsongList>

        </div>

    </div>
</template>
<script>
    import Mheader from '../../base/Mheader.vue'
    import LangsongList from '../Poem/LangsongList.vue'
  export default{
    data(){
      return {
        show:{
          type:Boolean,
          default:false
        },
        isShow:false,
        bgImg:{
          background: "url(" + require("../../assets/bg1.jpg") + ")",
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
    .header1{background: transparent!important;box-shadow: none!important;   color: #fff!important; }
        .header1 i{color: #fff!important;}
    .content1{top:0!important;bottom:0!important;padding: 0;}
    .aplayer-info{height: 70vh; text-shadow: 1px 1px 1px #000;font-size:0;padding: 0.88rem 0.3rem;  color: #fff;text-align: center;  position: fixed; width: 100%; overflow: auto;top: 0.88rem;
        h2{font-size: 0.36rem;margin-bottom: 0.2rem;}
        span{font-size: 0.2rem;margin-bottom: 0.8rem;display: inline-block}
        .aplayer-lrc-contents{font-size: 0.28rem;line-height: 2em}
    }
    .List{position: fixed;bottom: 0vh;height: 31vh;width:100%;}
    .List1{position: fixed;top: 100vh;height: 60vh;width:100%;
        ul{ position: fixed;overflow: auto;height:calc(51vh - 0.25rem);width: 100%}
    }
    .aplayer-controller{height: 12vh;background: #fff;width: 100%; position: fixed; bottom:10vh;
        .loading{width: 100%;height:0.06rem;background: #a4a4a4;position: fixed;
            span{height: inherit;background: #f54e2c;width: 20%;display: block}
        }
        .time{text-align: right;margin:0.15rem 0.25rem;font-size: 0.2rem;color: #333;font-family: Arial;color: #a4a4a4;
            span.current{padding: 0 0.15rem;color: #f54e2c;}
        }
        a{width:100%;padding: 0.05rem 0.25rem 0.25rem;background: #fff;display: flex;align-items: flex-start;font-size: 0;
            .img{position:relative;display: inline-block; width: 0.72rem;height:0.72rem;
                img{width:100%;border-radius: 50%;}
                i{position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%);color: #fff;width: 100%;height: 100%;background: rgba(0,0,0,0.25);
                    border-radius: 50%;text-align: center;line-height: 0.72rem;font-size: 0.2rem;}
            }
            .poemName{flex:1;font-size: 0;padding: 0 0.2rem;
                h2{font-size: 0.28rem;color: #14151a;line-height: 1em;height: 1em;overflow: hidden; margin-bottom: 0.18rem;float: left;margin-right: 0.2rem;}

                span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;display: block; clear: both;}
                i{font-style:normal;font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
            }
            button{float: left;background: #14151a;height: 0.32rem;line-height: 0.32rem;border-radius: 200px;padding: 0 0.35rem;color: #fff;
            i{font-size:0.2rem;}}
        }
    }
    .data{position: fixed; bottom:0;width:100%;height:10vh;border-top: 0.25rem solid #F7F8FC;background: #fff;display: flex;justify-content: space-between;align-items: center;padding:0 0.3rem;
        input{height: 0.45rem;background: #f3f3f3;border-radius: 200px; flex: 1;margin-right: 0.2rem;padding: 0 0.2rem;font-size: 0.18rem;}
        ul{display:flex;justify-content: space-around;align-items: center;
            li{text-align: center;padding: 0 0.15rem;font-size: 0.32rem;color: #333;
                i{font-style: normal;display: block;font-size: 0.2rem;display: block}
            }
        }
    }
    .btn{left: 0;color: #fff; width: 100%; background: rgba(0,0,0,0.25);height:calc(9vh - 0.25rem);
        div.icon{ display: flex;justify-content: space-between;align-items: center;padding: 0 0.25rem;height: inherit;
            button{font-size: 0.2rem;color: #fff;}
            i{font-size: 0.5rem;display: block}
            i.icon-mic{    position: absolute; top: 50%;left: 50%; transform: translate(-50%,-50%);font-size:0.4rem;}
            .loader3 {position: relative;width:1.2rem;height:1.2rem;dsplay:inline-block; padding:0px;text-align:left;}
            .loader3 span {position:absolute;display:inline-block;width:1.2rem;height:1.2rem;border-radius:100%; background:rgba(228, 91, 12,1);
                -webkit-animation:loader3 1s linear infinite;animation:loader3 1s linear infinite; }
            .loader3 span:last-child {animation-delay:-0.9s;-webkit-animation-delay:-0.9s;}
            @keyframes loader3 { 0% {transform: scale(0.3, 0.3);opacity:1;}100% {transform: scale(1, 1);opacity:0;}}
            @-webkit-keyframes loader3 {0% {-webkit-transform: scale(0.3, 0.3);opacity:1;} 100% {-webkit-transform: scale(1, 1);opacity:0;}
            }
        }
    }
    .showUl{top:40vh;
        -webkit-animation-name: show;
        -webkit-animation-duration: 0.3s;
        -webkit-animation-iteration-count:1;
        -webkit-animation-direction: alternate;
        -webkit-animation-timing-function:linear
    ;}
    .hideUl{
        top:100vh;
        -webkit-animation-name: hide;
        -webkit-animation-duration: 0.3s;
        -webkit-animation-iteration-count:1;
        -webkit-animation-direction: alternate;
        -webkit-animation-timing-function:linear;
    }
    @-webkit-keyframes show {
        0% {
            top: 100vh;
        }
        100% {
            top: 40vh;
        }
    }
    @-webkit-keyframes hide {
        0% {
            top: 40vh;
        }
        100% {
            top: 100vh;
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
            i{ont-style:normal;font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
            span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;}

        }

    }

</style>