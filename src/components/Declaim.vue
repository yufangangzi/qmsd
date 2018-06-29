<template>
    <div class="declaim">
        <Search></Search>
    </div>
</template>
<script>
    import Search from './Search/Search.vue'
  export default{
    data(){
      return {load:true}
    },
    methods: {},
    computed: {},
    components: {
      Search
    },
    watch:{
      $route(val){
        if(val.path!='/Declaim'){
          this.load=false
        }else{
          this.load=true
        }
      }
    },

  }
</script>
<style scoped lang="less">
    .pomeTitle{font-size: 0.36rem}
    .author{
        padding-top: 0.5rem;
        height: 50%;
        font-size: 0.2rem;
        background: #fff;
        text-align: center;
        span{line-height: 3em;color: #999}
    }
    .area{
        position: relative;
        img{width: 100%};
        div{
            position: absolute;top: 50%;left: 50%; width: 1.2rem;height: 1.2rem;background: rgba(0,0,0,0.5);border-radius: 50%;transform: translate(-50%,-50%);
            display: flex;justify-content: center;align-items: center;
            i{font-size: 1rem;color: #fff}
        }
    }

</style>