<template>
    <div class="poem">
        <Mheader :news="false" :back="true" :search="true"  :searchBtn1="true"></Mheader>
        <div class="content">
            <Poem></Poem>
        </div>
    </div>
</template>
<script>
  import Mheader from '../../base/Mheader.vue'
  import Poem from './Poem.vue'
  export default{
    data(){
      return {
      }
    },
    methods: {
    },

    computed: {
    },
    components: {Mheader,Poem,}
  }
</script>
<style scoped lang="less">
    html,body{height: 100%}
    input{min-width: 15em;padding: 0 0.2rem;}
    input,button{    border: none;outline: none;background: transparent}

</style>