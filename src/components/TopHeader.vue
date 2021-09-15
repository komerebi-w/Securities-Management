<template>
  <div id="topheader">
    <div class="rightuser">
      <div class="user">
        <div class="img">
          <template v-if="user">
            <img :src="user.face" alt="" />
          </template>
          <template v-else>
            <img src="/static/image/user.png" alt="" />
          </template>
        </div>
        <div class="username" v-if="user">{{user.name}}</div>
        <div class="username" v-else>欢迎您，haper_center1</div>
      </div>
      <div class="line"></div>
      <div class="logout" @click="closeUser">
        <div class="img">
          <img src="/static/image/tui.png" alt="" />
        </div>
        <div>退出</div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
import {userInfo} from '@/request/api.js'
import Storage from '@/storage/Storage.js'
export default {
  name: "topheader",
  computed:{
    /* ...mapGetters({
      getUser:'GET_USERINFO',
    }), */
    ...mapState(['user','userid']),
  },
  methods:{
    ...mapMutations({
      removeToken:'setToken',
      removeId:'saveUserid'
    }),
    ...mapActions({
      saveUser:'SAVE_USERINFO',
    }),
    closeUser(){
      //清除缓存
      Storage.removeStorage('token');
      this.removeToken();  //不清除store也行
      Storage.removeStorage('id');
      this.removeId();
      //跳转到登录界面
      this.$router.replace('/login');  //这里也可以用push
    }
  },
  created(){
      //获取用户基本信息 进行存储
      if(!this.user){
        console.log(this.userid);
        //如果不存在 发送ajax请求(传入用户id)
        userInfo({id:this.userid}).then((result)=>{
            // console.log(result.data); //mock中的返回值
            this.saveUser(result.data); //{name:'haper_center2',face:'/static/image/face.jpg'}
        }).catch((error)=>{
            console.log(error);
        });  
      }
  },
};
</script>
<style scoped lang="less">
#topheader {
  .rightuser {
    display: flex;
    height: 60px;
    align-items: center;
    margin-left: auto;
    .user {
      // position: absolute;
      // right: 35px;
      // margin-right: 35px;
      line-height: 60px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;
      .img {
        display: flex;
        width: 26px;
        height: 26px;
        border-radius: 100%;
        overflow: hidden;
        justify-content: center;
        border: 1px solid #fff;
        background: #fff;
        margin-right: 10px;
        img {
          width: 100%;
          // width: 80%;
        }
      }
      .username {
        opacity: 0.7;
      }
    }
    .line {
      width: 2px;
      height: 17px;
      margin-left: 18px;
      margin-right: 18px;
      background-color: #fff;
      opacity: 0.7;
    }
    .logout {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;
      .img {
        width: 18px;
        height: 18px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-right: 6px;
        color: #fff;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>