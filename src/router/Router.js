import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './Routes'
import storage from '@/storage/Storage.js'
import store from '@/store/index.js'
Vue.use(vueRouter);
let router=new vueRouter({
    routes,
    storage,
    store,
    mode:'history'
});

//前置守卫
router.beforeEach((to,from,next)=>{
    //获取token缓存
    let tokenstorage=storage.getStorage('token');
    //获取id缓存
    let idstorage=storage.getStorage('id');
    if(tokenstorage&&idstorage){
        store.dispatch('SET_TOKEN_USER',{token:tokenstorage,userid:idstorage});
    }
    if(to.matched.some(item=>item.meta.isAuthorToken===true)){
        /* 监测用户是否登陆
            如果没有登陆 去登录界面
        */
       let token=store.state.token;
       //也可以不在下面监测token值是否存在。
       //可以直接写一个token检测方法，把token直接发送到后台请求一下，跟后台token对比。如果不一致，就跳转登录界面
       if(!token){
          console.log(to.path,from.path); // '/,/'
          router.replace({
            path:'/login',
            query:{
                redirect:to.name  // '/' 表示是从别的路由跳转过来的
            }
          })
       }
       else{
            next();
       }
    }
    else{
        next();
    }
});

export default router;