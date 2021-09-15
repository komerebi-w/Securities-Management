<template>
  <div id="Dialog">
    <el-dialog title="" :visible.sync="show">
      <div slot="title" class="dialog-title">
        <i :class="titleIcon"></i>
        <span>{{titleName}}</span>
      </div>
      <!-- 写插槽 -->
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  /* watch:{
      //新增isVisible的watch，监听变更并同步到dialogFormVisible上
      isVisible(val){
          this.IsShowPage=val; 
      }
  }, */
  props: {
    dialogShow: Boolean,
    titleName:{
        type:String,
        default:'新增菜单'
    },
    titleIcon:{
        type:String,
        default:'el-icon-office-building'
    },
  },
  data(){
    return{
      show:false
    }
  },
  watch:{
    dialogShow(){
      //处理：子组件修改props变量 报错
      //解决：赋值给一个变量操作
      this.show=this.$props.dialogShow;
    }
  }
  /* created(){
    this.show=this.$props.dialogShow;
  } */
};
</script>
<style scoped lang="less">
#Dialog {
  .dialog-title span {
    font-size: 18px;
    color: #333;
    line-height: 28px;
  }
  .dialog-title i {
    width: 28px;
    height: 28px;
    background-color: #5786e7;
    border-radius: 100%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 28px;
    margin-right: 8px;
  }

  /deep/ .el-dialog__footer {
    text-align: center;
  }

  /deep/ .el-dialog .el-dialog__header {
    border-bottom: 1px solid #e6e6e6;
  }
}
</style>