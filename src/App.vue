<template>
<div id="app">
  <router-view></router-view>
  <!-- <router-view v-if="isUpdate"></router-view> -->
</div>
</template>
<script>
export default{
  name:"app",
/*   data(){
    return{
      isUpdate:false,
    }
  },
  provide(){
    return{
      reload:this.reload,
    }
  },
  methods:{
    reload(){
      // this.isUpdate=false;
      this.$nextTick(()=>{
        this.isUpdate=true;
      })
    }
  } */
}
</script>
<style lang='less' scoped>
@import url('./assets/css/common.less');
#app{
  width: @width;
  height:@height;
  position: relative;
  overflow: hidden;
}
</style>