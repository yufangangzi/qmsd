<template id="dialog">
    <div class="dialog"  v-if="showDialog">
        <div class="dialog_mask"></div>
        <div class="dialog_container">
            <div class="dialog_content">
                <div class="dialog_content_top"  v-text="msg">提示内容</div>
                <div class="dialog_content_content">
                    <span  v-for='(item,index) in value' :key="item.id">
                        <input type="checkbox" :id="item.id"  :value='item.name' v-model="checkedNames">
                        <label :for="item.name" class="icon iconfont icon-false">{{item.name}}</label>
                    </span>
                    <input type="hidden" :value="checkedNames">
                </div>
                <div class="dialog_btn">
                    <a  v-if="type==1" href="javascript:;" class="btn" @click="close">取消</a>
                    <a v-if="type==1"  href="javascript:;" class="btn" @click="record">立即上传</a>
                    <a  v-if="type==2" href="javascript:;" class="btn" @click="close"> 取消</a>
                    <a  v-if="type==2" href="javascript:;" class="btn" > 确定</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      msg: {
        type: String,
        required: true
      },
      type: {
        type: Number,
        required: true
      },
      value: {
        type: Array,
      },
    },
    data(){
      return {
        //type:'',
        checkedNames:[]
      }
    },
    methods: {
      close(){
        this.$emit('checked');
        this.checkedNames=[]
      },
      record(){
        let _self=this;
        setTimeout(()=>{ _self.$router.push({path:'/Record'})
        },1000)
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    .dialog{
    }
    .dialog_mask{position: fixed;left: 0;top: 0; width: 100%;height: 100%;padding: 0 0.3rem; background: rgba(0,0,0,0.5);}
    .dialog_container{  position: fixed; bottom: 0;left: 0;background: #fff; width: 100%;}
    .dialog_content{text-align: center;}
    .dialog_content_top{font-size: 0.28rem;margin-top: 0.7rem;}
    .dialog_content_content{min-height: 0.5rem;margin:0.55rem;font-size: 0.24rem;text-align:left;
        input{width:0.3rem;height:0.3rem;border: 1px solid #a4a4a4;border-radius: 4px}
        input[type="checkbox"]:checked{background: url("../assets/select.png");border: 1px solid #f54e2c;color: #f54e2c}
        input[type="checkbox"]:checked+label{color:#f54e2c}
        label{    vertical-align: middle; display: inline-block; margin-top: -0.2rem;margin-left: 0.05rem;font-size: 0.24rem;color: #666}
        span{display: inline-block;margin: 0.2rem 0.3rem;}
    }
    .dialog_btn{height:0.88rem;display:flex;}
    .dialog_btn a{color: #14151A;width: 50%;display: inline-block; border-top: 1px solid #E7E7E7;font-size: 0.24rem;line-height:0.88rem;}
</style>