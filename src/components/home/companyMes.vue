<template>
  <div id="companyMes">
    <div class="logo">
      <img :src="src" alt="" />
    </div>
    <div class="mes">
      <span>{{ name }}</span>
      <span>{{ detail }}</span>
    </div>
    <div class="data">
      <!-- <dl>
            <dt>{{down}}</dt>
            <dd>下属公司</dd>
        </dl>
        <div class="line"></div>
        <dl>
            <dt>{{syspeople}}</dt>
            <dd>系统操作员</dd>
        </dl> -->
      <v-mess
        :left1="down"
        left2="下属公司"
        :right1="syspeople"
        right2="系统操作员"
      ></v-mess>
    </div>
  </div>
</template>
<script>
export default {
  name: "companyMes",
  props: {
    src: String,
    name: String,
    detail: String,
    down: Number,
    syspeople: Number,
  },
  components: {
    "v-mess": () => import("@/components/home/mess.vue"),
  },
};
</script>
<style scoped lang='less'>
#companyMes {
  display: flex;
  align-items: center;
  .logo {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mes {
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-left: 23px;
    span:nth-child(1) {
      font-size: 18px;
    }
    span:nth-child(2) {
      margin-top: 11px;
      font-size: 14px;
    }
  }
  .data {
    display: flex;
    align-items: center;
    position: absolute;
    right: 27px;
    color: #fff;
    height: 88px;
    padding: 0 28px;
    background: rgba(54, 139, 255, 0.5);
    border-radius: 4px;
    .line {
      margin: 0 28px;
      width: 2px;
      height: 44px;
      background: #fff;
      opacity: 0.39;
      border-radius: 50%;
    }
    dl {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-box-pack: center;
      dt {
        font-size: 28px;
      }
      dd {
        margin: 0 !important;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>