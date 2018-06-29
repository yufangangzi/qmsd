<template>
    <div class="writePoem">
        <Mheader :news="false" :back="true" :write="true">我要写诗</Mheader>
        <div class="content">
            <div class="text">
                <input class="title" type="text" placeholder="请输入正确的标题"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入正确的标题'">
                <input class="author"  type="text" placeholder="请输入作者名称"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入作者名称'">
                <textarea  class="area" name="" id="" cols="30" rows="10">
    正文区域
                </textarea>
            </div>
            <button @click="submit">立即发布</button>
            <Popups :show-dialog="showDialog" :msg="msg" :value="value" :type='type' @checked="close"></Popups>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../base/Mheader.vue'
  import Popups from '../../base/Popups.vue'
  export default{
    data(){
      return {
        msg:'',
        showDialog:false,
        type:1,// 提示类型  1单按钮提示框  2双按钮提示框
        value:[
          {'id': 1,'name': '古体诗歌','checked': 'true'},
          {"id": 2,"name": "现代诗歌","checked": false},
          {"id": 3,"name": "儿童诗歌","checked": false},
          {"id": 4,"name": "外文诗歌","checked": false }
          ]
      }
    },
    methods: {
      submit(){
        this.msg = "选择诗歌类型，让您的诗歌更具特色";
        this.showDialog = !this.showDialog;
        this.type = 1;
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
    .content{padding: 0 0.3rem;font-size:0;background-image: url("../../assets/writeBg.jpg");background-color:#fbfbfb;background-position:center bottom;background-size: contain;background-repeat: no-repeat;margin-top: 0.2rem}
    .content .text{height: 77vh}
    input,textarea{width: 100%;text-align:center;}
    .title{font-size:0.36rem;color: #14151a;margin: 0.55rem auto 0.33rem}
    .author{font-size:0.2rem;color: #4d4d4d;margin-bottom:0.8rem}
    .area{font-size: 0.28rem;line-height: 2em;background: transparent;border: none}
    button{display:block;margin:0 auto;width: 2rem;height: 0.6rem;background: #14151a;border-radius: 200px;color:#fff;font-size:0.24rem;}
</style>