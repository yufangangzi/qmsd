<template>
    <div class="footer">
        <router-link to="/home"><i class="icon iconfont icon-recommend"></i><span>精选</span></router-link>
        <router-link to="/Find"><i class="icon iconfont icon-find"></i><span>发现</span></router-link>
        <router-link to="/Declaim" class="declaim"><div class="declaimBg"><div><i class="icon iconfont icon-mic"></i><span></span></div></div></router-link>
        <router-link to="/Mylisten"><i class="icon iconfont icon-erji"></i><span>我听</span></router-link>
        <router-link to="/My"> <i class="icon iconfont icon-user"></i><span>我的</span></router-link>
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
    .footer{
        position: fixed;
        left:0;
        bottom: 0;
        width: 100%;
        height: 1rem;
        display: flex;
        box-shadow: 0px 0px 9px rgba(0,0,0,0.15);
        background: #fff;
        a{
            font-size: 0.22rem;
            display: flex;
            flex-direction: column;
            flex: 1;
            color:#14151a;
            justify-content: center;
            align-items: center;
        }
        a.router-link-active{
            color: #f54e2c;
        }
        a.declaim{
            div.declaimBg{
                position: absolute;
                top:-0.5rem;
                width: 20vw;
                height: 19vw;
                border-radius: 50%;
                background: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                color: #fff;
                div{
                    width: 15vw;
                    height: 15vw;
                    border-radius: 50%;
                    background: #14151a;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                }
            }
            div.declaimBg:before{    position: absolute; top: -1px; z-index: -1; content: "";  width: 18vw;  height: 16vw; border-radius: 50% 50% 0 0; -webkit-box-shadow: 0px -2px 3px rgba(0,0,0,0.13);}

            i{
                font-size: 0.65rem;
            }
        }
        i{font-size: 0.38rem;    margin-bottom: 0.02rem;}
    }
</style>