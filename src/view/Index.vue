<template>
<div id="index"  :class="isCollapse?'hideSidebar':''">
    <div class="left-menu sidebar-container">
        <div class="sidebar-logo-container">
            <a href="/">
                <img :class="['sidebar-logo',isCollapse?'marginno':'']" src="/static/image/logo.png" alt="">
                <h1 v-if="!isCollapse" class="sidebar-title">证券后台系统</h1>
            </a>
        </div>
        <div class="el-scrollbar">
            <v-leftmenu :isCollapse='isCollapse'></v-leftmenu>
        </div>
    </div>
    <div class="right-content">
        <div :class="[isCollapse?'fixed-header-trans':'','fixed-header']">
            <div class="navbar">
                <div class="hamburger-container">
                    <i @click="menucollecp" :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
                </div>
                <div class="rightuser">
                    <v-topheader @myevent='getCollapse'></v-topheader>
                </div>
            </div>          
        </div>
        <div class="content-view">
            <transition name='slider_trans'>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:'index',
    data(){
        return{
            isCollapse:false,
        }
    },
    methods:{
        menucollecp(){
            this.isCollapse=!this.isCollapse;
        },
        getCollapse(args){
            this.isCollapse=args;
        }
    },
    components:{
        'v-leftmenu':()=>import('@/components/LeftMenu.vue'),
        'v-topheader':()=>import('@/components/TopHeader.vue'),
    }
}
</script>
<style scoped lang='less'>
@import url('../assets/css/common.less');
.slider_trans-enter-active,
.slider_trans-leave-active{
    transition: all 1s;
}
.slider_trans-enter{
    opacity: 0;
    left:-20px;
}
.slider_trans-enter-to,
.slider_trans-leave{
    opacity: 1;
    left:10px;
}
.slider_trans-leave-to{
    opacity: 0;
    left:40px;
}

    /* .slider_trans-enter-active,.slider_trans-leave-active{
        transition: opacity .5s;
    }
    .slider_trans-enter,.slider_trans-leave-to{
        opacity: 0;
    } */
#app .hideSidebar .sidebar-container{
    width: 64px !important;
}
/* .hideSidebar .fixed-header{
    width: calc(100% - 64px) !important;
} */
#index{
    width: @width;
    height:@height;
    display: flex;
    .left-menu{
        width: 210px;
        height: 100%;
        // position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        transition: width .28s;
        .sidebar-logo-container{
            // display: flex;
            border: .1px solid #000;
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            background: url('/static/image/title_left.png') no-repeat 100%;
            .marginno{
                margin-right: 0 !important;
            }
            .sidebar-logo{
                width: 36px;
                height: 36px;
                margin-right: 12px;
                vertical-align: middle;
            }
            .sidebar-title{
                display: inline-block;
                color: #fff;
                font-size: 19px;
                font-weight: 600;
                line-height: 50px;
                vertical-align: middle;
                transition:all .28s;
            }
            .hidetrans{
              width: 0;  
              opacity: 0;
            }
        }
        .el-scrollbar{
            // heigth:100%-60px;  //会被解析为40%
            height:calc(100% - 60px);
            background-color: #4667d8;
        }
    }
    .right-content{
        flex: 1;
        .fixed-header{
            transition:all .28s;
            position: absolute;
            top: 0;
            right: 0;
            height: 60px;
            width: calc(100% - 210px);
            background: url(../../static/image/title_right.png);
            // box-shadow: 0 1px 4px rgba(0,21,41,.08);
            .navbar{
                position: relative;
                display: flex;
                height: 60px;
                padding-right: 35px;
                align-items: center;
                .rightuser{
                    margin-left: auto
                }
                .hamburger-container{
                    z-index: 99;   
                    cursor: pointer;
                    padding: 0 15px;
                    i{
                        color:white;
                        font-size: 26px;
                        vertical-align: middle;
                    }
                }
                
            }
            
        }
        .fixed-header-trans{
            width: calc(100% - 64px) !important;
        }   
        /* .marginl{
            margin-left: 64px !important;
        } */
        .content-view{
            height: calc(@height - 60px);
            position: relative;
            // top:60px;
            margin-top: 60px;
            width: 100%;
            // overflow: hidden;
            overflow-x: hidden;
            overflow-y: scroll;
            padding:10px;
            box-sizing: border-box;
            background-color: #f0f0f0;
        }
        .content-view>div{
            // position: absolute;
            position: relative;
            width: 100%;
            height:100%;
            // left:10px;
            // top:10px;
            box-sizing: border-box;
        }
    }
}  
</style>