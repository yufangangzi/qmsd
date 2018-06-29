<template>
    <div class="writePoem">
        <Mheader :news="false" :back="true" :write="true">我的收藏</Mheader>
        <div class="content">
            <ul class="topList">
                <li>
                    <a>
                        <div class="poemName">
                            <h2>静待花开可缓缓开矣</h2>
                            <p>轻轻的我走了，  正如我轻轻的来；    我轻轻的招手， 别西天的云彩。</p>
                            <div  class="poemNews">
                                <span>36分钟之前</span>
                                <span><i class="icon iconfont icon-mic"></i>5632</span>
                                <span><i class="icon iconfont icon-collect"></i>152</span>
                            </div>
                        </div>
                        <div class="more" @click="submit"><i class="icon iconfont icon-more"></i> </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="poemName">
                            <h2>静待花开可缓缓开矣</h2>
                            <p>轻轻的我走了，  正如我轻轻的来；    我轻轻的招手， 别西天的云彩。</p>
                            <div  class="poemNews">
                                <span>36分钟之前</span>
                                <span><i class="icon iconfont icon-mic"></i>5632</span>
                                <span><i class="icon iconfont icon-collect"></i>152</span>
                            </div>
                        </div>
                        <div class="more"><i class="icon iconfont icon-more"></i> </div>
                    </a>
                </li>
            </ul>
            <Popups :show-dialog="showDialog" :msg="msg" :type="type" @checked="close"></Popups>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../../base/Mheader.vue'
  import Popups from '../../../base/Popups.vue'
  export default{
    data(){
      return {
        msg:'',
        showDialog:false,
        type:1,
       }
    },
    methods: {
      submit(){
        this.msg = "是否删除静待花开可慢慢缓矣";
        this.type = 2;
        this.showDialog = !this.showDialog;
        return;
      },
      close(){
        this.showDialog = !this.showDialog;
      }
    },

    computed: {
    },
    components: {Mheader,Popups}
  }
</script>
<style scoped lang="less">
    html,body{height: 100%}
    li a{width:100%;padding: 0.38rem 0.3rem 0.25rem;background: #fff;border-top: 1px solid #f5f5f5;;display: flex;align-items: flex-start;font-size: 0;
        div.more{position:relative;font-size: 0.2rem;color: #a4a4a4;height:1.65rem;width: 0.72rem;text-align:center;margin-left: 0.2rem;
        i{position: absolute;bottom: 0}}
        .img{position:relative;display: inline-block; width: 0.72rem;height:0.72rem;
            img{width:100%;border-radius: 50%;}

            i{position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%);color: #fff;width: 100%;height: 100%;background: rgba(0,0,0,0.25);
                border-radius: 50%;text-align: center;line-height: 0.72rem;font-size: 0.2rem;}
        }
        .poemName{flex:1;font-size: 0;
            h2{font-size: 0.28rem;color: #14151a;line-height: 1em;    height: 1em;overflow: hidden; margin-bottom: 0.18rem;}
            p{ line-height: 1.5em; margin-bottom:0.3rem;font-size:0.22rem;color:#999;display: -webkit-box;-webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; text-overflow: ellipsis;}
            span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;}
            i{font-style:normal;font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
        }
    }

</style>