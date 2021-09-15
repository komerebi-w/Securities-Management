<template>
<div id="leftmenu">
<el-menu
    class="el-menu-vertical-demo" 
    :collapse="isCollapse"
    background-color='#4667d8'
    text-color='#fff'
    active-text-color='#73f9d2'
    :unique-opened='unique'
    :router='true'
> 
    <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="/mechanism">
        <template slot="title">
        <i class="el-icon-office-building"></i>
        <span slot="title">机构权限管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/mechanism/menu">机构菜单管理</el-menu-item>
            <el-menu-item index="/mechanism/role">机构角色管理</el-menu-item>
        </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="/systemuser">
        <i class="el-icon-user-solid"></i>
        <span slot="title">系统操作员用户管理</span>
    </el-menu-item>

    <el-submenu index="/product">
        <template slot="title">
        <i class="el-icon-cpu"></i>
        <span slot="title">产品管理</span>
        </template>
        <el-menu-item index="/product/type">产品分类管理</el-menu-item>
        <el-menu-item index="/product/list">产品列表</el-menu-item>
    </el-submenu>

    <el-menu-item index="5">
        <i class="el-icon-s-goods"></i>
        <span slot="title">公司管理</span>
    </el-menu-item>

    <el-submenu index="6">
        <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span slot="title">客户管理</span>
        </template>
        <el-menu-item index="6-1">投资客户账号管理</el-menu-item>
        <el-menu-item index="6-2">客户账户列表</el-menu-item>
        <el-menu-item index="6-2">客户组列表</el-menu-item>
    </el-submenu>

    <el-submenu index="7">
        <template slot="title">
        <i class="el-icon-chat-dot-square"></i>
        <span slot="title">客户消息中心</span>
        </template>
        <el-menu-item index="7-1">客户消息模板配置</el-menu-item>
        <el-menu-item index="7-2">客户消息列表</el-menu-item>
    </el-submenu>

    <el-submenu index="8">
        <template slot="title">
        <i class="el-icon-coin"></i>
        <span slot="title">交易管理</span>
        </template>
        <el-menu-item index="8-1">订单列表</el-menu-item>
        <el-menu-item index="8-2">成交记录列表</el-menu-item>
        <el-menu-item index="8-2">仓位列表</el-menu-item>
    </el-submenu>
</el-menu>
</div>
</template>
<script>
export default{
    name:"leftmenu",
    props:{
        isCollapse:Boolean,
        /* isCollapse:{
            type:Boolean,
            default:true
        } */
    },
    data() {
      return {
        unique:true,
      };
    },
    methods: {
      
    }
}
</script>
<style scoped lang='less'>
  /* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  } */
  /deep/ i{
    color: #fff;
  }
  /deep/ .is-active>.el-submenu__title{
    background-color: #3b55b4 !important;
    border-left: 2px solid #73f9d2;
    color:#73f9d2 !important;
  }
  .is-active>.el-submenu__title>i{
      color:#73f9d2 !important;
  }
  .el-menu-vertical-demo>.el-menu-item.is-active{
      border-left: 2px solid #73f9d2;
  }  
  /deep/ .el-menu-item-group__title{
      padding: 0;
  }
  .el-menu--inline .el-menu-item{
      padding-left: 53px !important;
      font-size: 13px;
  }
  .el-menu{
      border-right: none !important;
  }
  .el-menu--collapse {
      width: 54px;
  }
  .el-menu-vertical-demo el-menu span{
      margin-left: 5px !important;
  }








/*   /deep/ .el-tooltip__popper.is-dark>div>span {
    background: #303133 !important;
    color: #fff !important;
   } */  //压缩后样式



  /* .el-menu--inline .el-menu-item{
      list-style: disc !important;
  } */

  /* .el-menu-item{
    background-color: #2d459c ;
    border-left: none;
  } */
  /* .is-active i{
      color: #73f9d2;  //图标变色
  } */
</style>