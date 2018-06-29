<template>
    <div>
        <Mheader :search="false" :searchBtn="false" :set="true">我的</Mheader>
        <div class="content">
            <div class="person">
                <img src="../../assets/avatar.jpg" alt="">
                <h2>静待花开可缓缓开矣</h2>
                <ul><li><span>108</span>诗歌</li>|<li><span>108</span>朗诵</li>|<li><span>108</span>粉丝</li>|<li><span>108</span>关注</li></ul>
                <p>
                    徐志摩（1897年1月15日—1931年11月19日），浙江海宁硖石人，现代诗人、散文家。原名章垿，字槱森，留学英国时改名志摩。曾经用过的笔名：南湖、诗哲、海谷、谷、大兵、云中鹤、仙鹤、删我、心手、黄狗、谔谔等。徐志摩是新月派代表诗人，新月诗社成员 。</p>
            </div>
            <div  class="list">
                <List link="/Production" dir="我的作品" :news="true"><span class="icon iconfont icon-production"></span></List>
            </div>
            <div  class="list">
                <List link="/News" dir="消息通知"><span class="icon iconfont icon-news"></span></List>
                <List link="/Comment" dir="评论管理"><span class="icon iconfont icon-comment"></span></List>
            </div>
            <div  class="list">
                <List link="/Fans" dir="我的粉丝"><span class="icon iconfont icon-fans"></span></List>
                <List link="/Collect" dir="我的收藏"><span class="icon iconfont icon-collect"></span></List>
            </div>
            <div  class="list">
                <List link="/home" dir="帮助与反馈"><span class="icon iconfont icon-help"></span></List>
            </div>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../base/Mheader.vue'
  import List from '../../base/List.vue'
  import Production from './Production/Production.vue'
  import Collect from './Collect/Collect.vue'
  import News from '../My/News/News.vue'
  import Comment from '../My/Comment/Comment.vue'
  export default{
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {
      Mheader, List,Production,Collect,News,Comment
    }
  }
</script>
<style scoped lang="less">
    .header{ box-shadow: 0px 0px 0px rgba(0,0,0,0.13)!important;}
    .person {
        margin-top: -0.2rem;
        padding: 0.4rem 0.3rem 0.3rem;
        font-size: 0.2rem;
        text-align: center;
        background: #fff;
        img {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
            border: 5px solid rgba(111,99,44,0.1);
        }
        h2{font-size: 0.28rem;    margin-top: 0.2rem;}
        ul{
            display: flex;justify-content: center;align-items: center;color: #666;margin-top: 0.3rem;
            li{margin: 0 0.15rem;
            span{margin-right: 0.15rem;font-family: arial;
            }}
        }
        p {margin-top:0.3rem;line-height: 1.5em; color: #666;display:-webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;
        }
    }

    .list {
        margin: 0.25rem 0;
        a{
            span{ font-size: 0.3rem; color: #14151a; margin-right: 0.15rem;}
        }
        div{
            background: #fff;
            font-size: 0.26rem;
        }
    }


</style>