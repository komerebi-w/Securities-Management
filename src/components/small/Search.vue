<template>
  <div id="search">
    <form action="">
      <div class="forminput">
        <div>
          <label class="first" for="menuId">菜单编号</label>
          <el-input name="menuId" clearable v-model="menuId"> </el-input>
        </div>
        <div>
          <label for="menuName">菜单名称</label>
          <el-input name="menuName" clearable v-model="menuName"> </el-input>
        </div>
        <div>
          <label for="menuLeavel">菜单等级</label>
          <el-select placeholder="" v-model="menuLeavel" clearable>
            <el-option
              v-for="item in optionLeavel"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <label for="menuType">机构类型</label>
          <el-select placeholder="" v-model="menuType" clearable>
            <el-option
              v-for="item in optionType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="formbtn">
        <el-button @click="searchData" size="small" type="primary" icon="el-icon-search"
          >搜索</el-button
        >
        <el-button size="small" @click="resetData" icon="el-icon-delete"
          >重置</el-button
        >
      </div>
    </form>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: "search",
  data() {
    return {
      menuId: "",
      menuName: "",
      menuLeavel: "",
      // menuleavel: "",
      menuType: "",
      // menutype: "",
      optionLeavel: [
        {
          value: "一级菜单",
          label: "一级菜单",
        },
        {
          value: "二级菜单",
          label: "二级菜单",
        },
        {
          value: "三级菜单",
          label: "三级菜单",
        },
      ],
      optionType: [
        {
          value: "运营中心",
          label: "运营中心",
        },
        {
          value: "顶层公司/集团",
          label: "顶层公司/集团",
        },
        {
          value: "交易商",
          label: "交易商",
        },
      ],
    };
  },
  /* created(){
    //如果上面四个选项都是空的
    if(!this.menuId&&!this.menuName&&!this.menuLeavel&&!this.menuType){
      this.setSearch(); 
    }
  }, */
  methods:{
    ...mapMutations({
      setSearch:'set_searchData',
      updatNowpage:'update_nowPage',
    }),
    resetData(){
      this.menuId=null;
      this.menuName=null;
      this.menuLeavel=null;
      this.menuType=null;
      this.setSearch(); 
    },
    searchData(){
      //在getter中进行数据过滤
      //如果上面四个选项都是空的
      /* if(!this.menuId&&!this.menuName&&!this.menuLeavel&&!this.menuType){
        this.setSearch(); 
      }
      else{
        this.$store.getters.filter_Data({
          menuId:this.menuId,
          menuName:this.menuName,
          menuLeavel:this.menuLeavel,
          menuType:this.menuType
        })
      } */
      // this.updatNowpage(1);
      if(this.menuId||this.menuName||this.menuLeavel||this.menuType){
        this.$store.getters.filter_Data({
          menuId:this.menuId,
          menuName:this.menuName,
          menuLeavel:this.menuLeavel,
          menuType:this.menuType
        });
      }
      else{
        this.setSearch(); 
      }
    },
  }
};
</script>
<style scoped lang='less'>
#search {
  form {
    display: flex;
    flex-direction: column;
    .forminput {
      display: flex;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        label {
          white-space: nowrap;
          font-weight: 700;
          font-size: 14px;
          color: #606266;
          margin: 0 15px 0 30px;
        }
        .first {
          margin-left: 0;
        }
        /deep/ .el-input {
          width: 100%;
          box-sizing: border-box;
        }
        /deep/ .el-input__inner {
          display: inline-block;
          box-sizing: border-box;
          padding: 0 15px;
          width: 200px;
          height: 34px;
          font-size: 14px;
          line-height: 80px;
        }
      }
    }
    .formbtn {
      margin: 15px 0;
      font-size: 14px;
      .el-button--primary {
        background-color: #5786e7;
      }
      .el-button + .el-button {
        margin-left: 20px;
      }
      .el-button--mini,.el-button--small {
        font-size: 13px;
        width:70px;
        padding-left: 12px;
      }
    }
  }
}
</style>