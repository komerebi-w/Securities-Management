<template>
  <div id="mechanism_menu">
    <div class="form-inline">
        <v-search></v-search>
    </div>
    <div class="list">
        <v-data :data="data" tilname="新增菜单"></v-data>
    </div>
  </div>
</template>
<script>
import {getMenuList} from '@/request/api.js';
import {mapState} from 'vuex';
export default {
  name: "mechanism_menu",
  components:{
      'v-search':()=>import('@/components/small/Search.vue'),
      'v-data':()=>import('@/components/small/Datatable.vue')
  },
  created(){
      //获取表单数据
      this.readData();
  },
  data(){
      return{
        data:[],
      }
  },
  methods:{
    readData(){
      getMenuList({nowPage:this.nowPage,pageNum:this.pageNum}).then((result)=>{
        /* console.log(result.data);
        this.data=result.data; */
        // console.log(result);
        this.data=result;
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  computed:{
    ...mapState(['nowPage','pageNum','searchData']),
  },
  watch:{
    pageNum(nValue,oValue){
      // console.log(nValue,oValue);
      this.readData();
    },
    nowPage(nValue,oValue){
      // console.log(nValue,oValue);
      this.readData();
    },
    searchData(nValue){
      console.log(nValue);
      this.readData();
    },
  },
};
</script>
<style scoped lang='less'>
#mechanism_menu {
  .form-inline {
    display: flex;
    align-items: center;
    padding-top: 22px;
    padding-left: 26px;
    border-radius: 4px;
    background-color: #fff;
  }
  .list {
    margin-top: 10px;
    background-color: #fff;
    padding: 14px;
    border-radius: 4px;
  }
}
</style>