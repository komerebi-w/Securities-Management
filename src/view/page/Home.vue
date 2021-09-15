<template>
  <div id="home">
    <div class="home_left">
      <div class="company-mes">
        <v-companyMes
          :src="homeData.logo"
          :name="homeData.name"
          :detail="homeData.detail"
          :down="homeData.down"
          :syspeople="homeData.syspeople"
        >
        </v-companyMes>
      </div>
      <div class="daiban">
        <v-hometitle icon="el-icon-success" title="待办信息"></v-hometitle>
        <div class="body">
          <div class="left">
            <v-daiBan
              title="客户管理"
              :left1="homeData.removedai"
              left2="销户待办"
              :right1="homeData.zhuandai"
              right2="转组待办"
            >
            </v-daiBan>
          </div>
          <div class="right">
            <v-daiBan
              title="系统用户管理"
              :left1="homeData.pwdreset"
              left2="密码重置待办"
              :right1="homeData.dainame"
              right2="待办名称"
            >
            </v-daiBan>
          </div>
        </div>
      </div>
      <div class="echars">
        <div class="echars-item echars-left">
          <v-hometitle
            icon="el-icon-pie-chart"
            title="订单统计列表"
          ></v-hometitle>
          <v-pie v-if="isUpdate" :pieData='pie'></v-pie>
        </div>
        <div class="echars-item echars-right">
          <v-hometitle
            icon="el-icon-data-analysis"
            title="公司运营报表"
          ></v-hometitle>
          <v-bar v-if="isUpdate" :BarDate='bar'></v-bar>
        </div>
      </div>
    </div>
    <div class="home_right">
      <div class="mes-box">
        <v-hometitle
          icon="el-icon-message-solid"
          title="消息/通知"
        ></v-hometitle>
        <v-list :list="homeData.msg"></v-list>
      </div>
      <div class="mes-box">
        <v-hometitle icon="el-icon-s-order" title="系统公告"></v-hometitle>
        <v-list :list="homeData.sysmsg"></v-list>
      </div>
      <div class="mes-box bottom">
        <v-hometitle icon="el-icon-question" title="消息帮助"></v-hometitle>
        <v-list :list="homeData.syshelp"></v-list>
      </div>
    </div>
  </div>
</template>
<script>
import { getHomeDate } from "@/request/api.js";
export default {
  name: "home",
  // inject:['reload'],
  components: {
    "v-hometitle": () => import("@/components/home/homeTitle.vue"),
    "v-companyMes": () => import("@/components/home/companyMes.vue"),
    "v-daiBan": () => import("@/components/home/daiBan.vue"),
    "v-list": () => import("@/components/home/lilist.vue"),
    "v-pie": () => import("@/components/home/Pie.vue"),
    "v-bar": () => import("@/components/home/Bar.vue"),
  },
  data() {
    return {
      homeData: "",
      pie:[],
      bar:[],
      isUpdate:false,
    };
  },
  created() {
    //获取当前界面的数据
    getHomeDate()
      .then((result) => {
        this.homeData = result.data;
        this.pie=this.homeData.tongdata;
        this.bar=this.homeData.yuntable;
        /* 组件上面绑定数组值 在界面不刷新的情况 处理界面不更新问题 */
        //强制 局部刷新
        //this.$nextTick可实现在DOM状态更新后，执行传入的方法
        this.$nextTick(()=>{
            this.isUpdate=true;
        })

        // this.$forceUpdate();

        /* this.$nextTick(()=>{
            this.init();
          resolve();
        }) */
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped lang='less'>
#home {
  display: flex;
  height: auto;
//   overflow-y: scroll;
//   height: 100%;
  // overflow-y: hidden;
  .home_left {
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    // overflow-y: auto;
    .company-mes {
      display: flex;
      position: relative;
      width: 100%;
      height: 118px;
      padding: 0 27px;
      align-items: center;
      background: url(/static/image/company_bg.png) no-repeat 100% 100%;
      /* background-image: url(/static/image/company_bg.png);
            background-repeat: no-repeat; */
      background-size: 100% 100%;
      border-radius: 8px;
      box-sizing: inherit;
    }
    .daiban {
      margin-top: 10px;
      width: 100%;
      padding: 18px;
      box-sizing: inherit;
      border-radius: 8px;
      background-color: #fff;
      .body {
        display: flex;
        div {
          flex: 1;
          height: 142px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          border-radius: 8px;
          color: #fff;
        }
        .left {
          width: 100%;
          background-image: url("/static/image/dai1.png");
          margin-right: 10px;
        }
        .right {
          background-image: url("/static/image/dai2.png");
        }
      }
    }
    .echars {
      display: flex;
      margin: 10px 0;
      font-size: 12px;
      .echars-left{
        margin-right: 10px;
      }
      .echars-item {
        flex: 1;
        padding: 18px;
        padding-top: 12px;
        box-sizing: border-box;
        height: 323px;
        border-radius: 8px;
        background-color: #fff;
      }
    }
  }
  .home_right {
    width: 20%;
    height: 106.5%;
    margin-left: 10px;
    // padding-bottom: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    // -webkit-box-orient: vertical; //从上向下垂直排列子元素
    .mes-box {
      flex: 1;
      width: 100%;
      // height: 340px;
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 8px;
      padding: 12px 18px;
      box-sizing: border-box;
      /* padding: 18px;
            padding-top: 12px;
            box-sizing: border-box; */
    }
    .bottom {
      margin-bottom: 0;
    }
  }
}
</style>