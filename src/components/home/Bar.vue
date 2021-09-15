<template>
  <div id="bar">
    <div class="time">
      <span>数据类型</span>
      <el-select size="small" v-model="value" placeholder="请选择"
        @change="changeType"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="echarts" id="main" ref="echele"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "bar",
  data(){
    return {
      value: "",
      options: [
        { value: "1", label: "平台盈利" },
        { value: "0", label: "平台资产" },
      ],
      yearList:[],
      dataList:[],
    };
  },
  created(){
    // let bar=this.$props.BarDate;
    let bar=this.BarDate;
    this.changeArray(bar);
  },
  props: {
    BarDate:Array,
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    changeType(){
      // console.log(this.value);
      this.changeArray();
    },
    changeArray(args){
      //先清空数据
      this.dataList=[];
      this.yearList=[];
      //将JSON数据转为数组
      // console.log(args);
      args&&args.map(({value,name})=>{
        this.dataList.push(value);
        this.yearList.push(name);
      });
    },
    initEcharts() {
      //获取虚拟dom结点
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      // console.log(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category", //默认值，类目轴
            data: this.yearList,  //类目数据(x)
            axisTick: {
              show: false,  //不显示坐标轴刻度
              alignWithLabel: true, //保证刻度线和标签对齐
            },
            axisLine: {
              show: false,  //不显示坐标轴轴线
            },
          },
        ],
        yAxis: [
          {
            type: "value", //y轴坐标类型为数据轴
          },
        ],
        series: [
          {
            // name: '直接访问',
            type: "bar",
            barWidth: "35%",  //柱的宽
            data: this.dataList,  //y轴数据
            //设置渐变色
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                ),
                // BorderRadius : [ 15, 15, 0, 0]  //圆角
                barBorderRadius : [ 15, 15, 0, 0]  //圆角
            },
            //悬浮变色
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
          },
        ],
      };
      myChart.clear();
      option && myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang='less'>
#bar {
  .time {
    span {
      font-size: 14px;
      color: #606266;
      font-weight: 700;
    }
    div {
      width: 200px;
      line-height: 40px;
      margin: 0 20px;
    }
  }
  .echarts {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
  }
}
</style>