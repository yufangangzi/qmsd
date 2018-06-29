<template>
    <div>
        <ul>
            <li><img src="../../assets/1.jpg" alt="">
                <div class="nickname">
                    <h2>静待花开可缓缓开矣</h2>
                    <span><i class="icon iconfont icon-mic"></i>5632</span>
                    <span><i class="icon iconfont icon-fans"></i>152</span>
                </div>
                <button class="plus"><i class="icon iconfont icon-plus"></i></button>
            </li>
            <li><img src="../../assets/1.jpg" alt="">
                <div class="nickname">
                    <h2>静待花开可缓缓开矣</h2>
                    <span><i class="icon iconfont icon-mic"></i>5632</span>
                    <span><i class="icon iconfont icon-fans"></i>152</span>
                </div>
                <button class="check"><i class="icon iconfont icon-check"></i></button>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    li{width:100%;padding: 0.38rem 0.3rem 0.25rem;background: #fff;border-top: 1px solid #f5f5f5;;display: flex;align-items: flex-start;
    img{display: inline-block; width: 0.7rem;height:0.7rem;border-radius: 50%;}
    .nickname{flex:1;font-size: 0;padding: 0 0.2rem;
        h2{font-size: 0.28rem;color: #14151a;line-height: 1em; margin-bottom: 0.18rem;}
        span{display: inline-block;margin-right: 0.3rem;font-size: 0.2rem;color: #a4a4a4;font-family: arial;}
        i{font-size: 0.2rem;color: #a4a4a4;margin-right: 0.1rem}
    }
    button{ background: #14151a; color: #fff;border-radius: 200px;line-height: 0.4rem; width: 1.26rem; height: 0.4rem;
    i{font-size: 0.18rem;}}
    button.plus{background: #14151a}
    button.check{background: #D0D0D1}

    }
</style>