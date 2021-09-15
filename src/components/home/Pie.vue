<template>
  <div id="pie">
    <div class="time">
      <span>统计周期</span>
      <el-date-picker
        v-model="startTime"
        type="date"
        placeholder="选择日期"
        size="mini"
        @change="changeTime"
      ></el-date-picker>
      <span>至</span>
      <el-date-picker
        v-model="endTime"
        type="date"
        placeholder="选择日期"
        size="mini"
        @change="changeTime"
      ></el-date-picker>
    </div>
    <!-- 饼状图 -->
    <!-- 虚拟dom结点 标注refs相当于id -->
    <div class="echarts" ref="echele"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "pie",
  data() {
    return {
      startTime: "",
      endTime: "",
    };
  },
  props: {
    pieData: Array,
  },
  /* created() {
      this.initEcharts();
  }, */
  //初始化后拿不到 必须等到挂载完成
  mounted() {
    this.initEcharts();
  },
  methods: {
    getTime(time) {
        return new Date(time).getTime();
    },
    changeTime() {
      /* console.log(this.startTime, this.endTime);
      console.log(new Date(this.startTime));
      console.log(new Date(this.startTime).getTime()); */
      if (this.startTime && this.endTime) {
          if(this.getTime(this.startTime)>this.getTime(this.endTime)){
            this.$message({
            message: "提示：前者日期超过了后者日期！",
            type: "warning",
            });
          }
          else{
              //从后端获取数据并挂载 
          }
      } 
      else {
        if(this.endTime){
          this.$message({
          message: "提示：请完整选择日期！",
          type: "warning",
        });
        }
      }
    },
    initEcharts() {
      //获取虚拟dom结点
      //   console.log(this);
      let echartsEle = this.$refs.echele;
      //   console.log(echartsEle);
      let myChart = echarts.init(echartsEle);
      let option;

      option = {
        tooltip: {
          trigger: "item",
        },
        //模块介绍标注
        /*    legend: {
        orient: 'vertical',
        left: 'left',
        },*/
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 7, //偏移值
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang='less'>
#pie {
  .time {
    span:nth-child(1) {
      font-size: 14px;
      color: #606266;
      font-weight: 700;
    }
    div {
      width: 150px;
      line-height: 40px;
      margin: 0 20px;
    }
  }
  .echarts {
    width: 100%;
    height: 245px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>