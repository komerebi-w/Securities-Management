<template>
<div id="login">
    <div class="body">
      <form action="">
        <div class="title-container">
          <div class="img">
            <img src="/static/image/logo.png" alt="">
          </div>
          <h3>证券后台系统</h3>
        </div>
        <div class="user">
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-user"
            v-model="userid">
          </el-input>
        </div>
        <div class="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="userpwd"
            :type="islook?'text':'password'"
            maxlength="6">
          </el-input>
          <i @click="userlook" :class="['look',islook?'el-icon-success':'el-icon-error']"></i>
        </div>
        <!-- <div>
          <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        </div> -->
        <div class="userbtn">
          <el-button @click="doLogin" type="primary" :loading="checkLogin">登录</el-button>
        </div>
      </form>
      <div class="left-img">
        <img src="/static/image/left.png" alt="">
      </div>
      <div class="right-img">
        <img src="/static/image/right.png" alt="">
      </div>
    </div>
</div>
</template>
<script>
import {userLogin} from '@/request/api.js'
import Storage from '@/storage/Storage.js'
export default{
    name:'login',
    data(){
      return{
        userid:null,
        userpwd:null,
        checkLogin:false,
        islook:false,
      }
    },
    methods:{
      userlook(){
        this.islook=!this.islook;
      },
      doLogin(){
        if(this.userid&&this.userpwd){
          /* 请求用户登录 */
          //登录加载图标出现
          this.checkLogin=true;
          //post 对象型传参
          userLogin({id:this.userid,pwd:this.userpwd}).then((data)=>{
            //封装api返回的是result.data
            // console.log(data);  //mock中的返回值
            this.checkLogin=false;
            if(data.states=='ok'){
              //将返回的数据token 存储到storage缓存以及状态管理vuex
              this.$store.dispatch("SET_TOKEN_USER",{token:data.result.token,userid:this.userid});
              Storage.setStorage('id',this.userid);
              Storage.setStorage('token',data.result.token);
              this.$router.replace({
                path:'/'
              });
            }
            else{
              //通知用户 element-ui
              this.$message.error('账号或密码错误');
            }
          })
        }
      }
    }
}
</script>
<style lang='less' scoped>
@import url('../assets/css/common.less');
#login{
  width: @width;
  height:@height;
  position: relative;
  overflow: hidden;
  background-image: url('/static/image/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  .body{
    position: absolute;
    width: 1260px;
    height:620px;
    left:50%;
    top:50%;
    margin-left: -630px;
    margin-top: -310px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 50px #27265c;
    form{
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 100px;
      width: 420px;
      .title-container{
        display: flex;
        justify-content: center;
        align-items: center;
        .img{
          width: 75px;
          margin-right: 12px;
          img{
            width: 100%;
          }
        }
        h3{
          font-size: 33px;
          color: #333;
          margin:22px 0;
        }
      }
      .user,.password,.userbtn{
        position: relative;
        margin-bottom: 22px;
        margin-right: 20px;
        width: 398px;
        height: 54px;
        /deep/ .el-input__prefix{
          font-size: 20px;
          color:#818181;
        }
        /deep/ .el-input__inner{
          height: 52px;
          outline: none;
          padding-left: 38px;
        }
        button{
          width: 100%;
          height: 52px;
          background: -webkit-linear-gradient(left,#2e50e1,#6878f0);
        }
        .look{
          position: absolute;
          right: 13px;
          top: 15px;
          font-size: 20px;
          cursor: pointer;
          color: #606266
        }
      }     
    }
    .left-img{
      position: absolute;
      width: 50%;
      height:100%;
      left: 0;
      bottom: 0;
      img{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
    .right-img{
      position: absolute;
      right: 0;
      top: 0;
      width: 180px;
      img{
        width: 100%;
      }
    }
  }
}
</style>