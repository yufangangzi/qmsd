<template>
    <div>
        <ul class="topList">
            <li>
                <a>
                    <div class="img"><img src="../../../assets/avatar.jpg" alt=""><i class="icon iconfont icon-play"></i></div>
                    <div class="poemName">
                        <h2>静待花开可缓缓开矣</h2>
                        <div class="poemLs" >
                                <span>36分钟之前</span>
                                <span><i class="icon iconfont icon-erji"></i>5632</span>
                                <span><i class="icon iconfont icon-heart"></i>152</span>
                        </div>
                    </div>
                    <div class="more"><i class="icon iconfont icon-more"></i> </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{
    data(){
      return {
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    li a{width:100%;padding: 0.38rem 0.3rem 0.25rem;background: #fff;border-top: 1px solid #f5f5f5;;display: flex;align-items: flex-start;font-size: 0;
        div.more{font-size: 0.2rem;color: #a4a4a4;width: 0.72rem;height:0.72rem;line-height: 0.72rem;text-align:center}
        .img{position:relative;display: inline-block; width: 0.72rem;height:0.72rem;
            img{width:100%;border-radius: 50%;}
            i{position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%);color: #fff;width: 100%;height: 100%;background: rgba(0,0,0,0.25);
                border-radius: 50%;text-align: center;line-height: 0.72rem;font-size: 0.2rem;}
        }
        .poemName{flex:1;font-size: 0;padding-left:0.2rem;
            h2{font-size: 0.28rem;color: #14151a;line-height: 1em;    height: 1em;overflow: hidden; margin-bottom: 0.18rem;}
            span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial!important;}
            i{font-style:normal;font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
        }
    }
</style>