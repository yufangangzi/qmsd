<template xmlns="http://www.w3.org/1999/html">
    <div class="detail">
        <Mheader :news="false" :back="true" :share="true"></Mheader>
        <div class="content content1 aplayer"  :style="bgImg" id="player3">
           <pre class="aplayer-lrc-content">
                [00:00.00]J轻轻的我走了，
                [00:00.08]正如我轻轻的来；
                [00:00.22]我轻轻的招手，
[00:00.30]作别西天的云彩。

[00:00.50]那河畔的金柳，
[00:01.22]是夕阳中的新娘；
[00:02.22]波光里的艳影，
[00:03.22]在我的心头荡漾。
[00:04.48]那榆荫下的一潭，
            </pre>
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
    import VueAplayer from 'vue-aplayer'

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
    mounted () {
      this.$nextTick(()=>{
        var ap3 = new APlayer({
          element: document.getElementById('player3'),//样式1
          narrow: false,
          autoplay: false,
          showlrc: true,
          music: {
            title: '再别康桥',
            author: '徐志摩',
            url: 'jzj.mp3',
            pic: 'data:image/jpeg;base64,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'
          }
        });
        ap3.init();
      })

    },
    computed: {},
    components: {Mheader,LangsongList}
  }
</script>

<style scoped lang="less">
    .header1{background: transparent!important;box-shadow: none!important;   color: #fff!important; }
        .header1 i{color: #fff!important;}
    .content1{top:0!important;bottom:0!important;padding: 0;}

    .List{position: fixed;bottom: 20vh;height: 11vh;width:100%;}
    .List1{position: fixed;top: 100vh;height: 60vh;width:100%;
        ul{ position: fixed;overflow: auto;height:calc(51vh - 0.25rem);width: 100%}
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