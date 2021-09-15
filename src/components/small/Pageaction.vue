<template>
  <div id="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="nowPage"
      :page-sizes="[5,10,15]" 
      :page-size="pageNum"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totleNum"
    >    
    </el-pagination>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
  name: "page",
  computed:{
    ...mapState(['nowPage','pageNum','totleNum']),
  },
  methods: {
    ...mapMutations({
      updateNum:'update_pageNum',
      updatePage:'update_nowPage',
    }), 
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.updateNum(val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.updatePage(val);
    },
  },
  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
</style>