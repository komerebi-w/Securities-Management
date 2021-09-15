<template>
  <div id="lilist">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="dian"></div>
        <div class="text">
          <!-- <div v-if="item.name">{{ item.name }}</div> -->
          <div v-if="item['name']">{{ item.name }}</div>
          <div v-else>{{item}}</div>
          <!-- 一般不需要 后台提供的数据均为JSON -->
          <span v-if="item.time">{{ item.time }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "lilist",
  props: {
    list: Array, 
  },
};
</script>
<style scoped lang='less'>
#lilist {
  ul {
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-bottom: 22px;
      .dian {
        width: 4px;
        height: 4px;
        background-color: #7895f7;
        border-radius: 100%;
        margin-right: 10px;
      }
      .text {
        div {
          color: #5786e7;
        }
        span {
          color: #999;
        }
      }
    }
  }
}
</style>