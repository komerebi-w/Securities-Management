import axios from 'axios'
import store from '@/store/index.js'

/* 基本配置 */
// axios.defaults.baseURL="http://localhost:8080";

//设置axios请求超时
axios.defaults.timeout=5000;

//默认设置post的请求头
axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";

/* 设置ajax拦截器 */
//1.请求拦截器
//config 请求相关配置(包括请求头等)
axios.interceptors.request.use((config)=>{
    //拦截请求 设置相关(在发送请求之前做些什么)
    //如监测用户是否有token值，登录等
    let token=store.state.token;
    /* 
    监测token存在 
    并且给请求头设置参数Authortoken为token 传到后台监测 
    */
    token&&(config.headers['authorToken']=token);
    return config; //一定记得返回
},(error)=>{
    // 对请求错误做些什么
    return Promise.reject(error);
})
//2.响应拦截器
axios.interceptors.response.use((response)=>{
    //对响应数据做点什么
    //请求成功 服务器响应 200
    if(response.status===200){
        return Promise.resolve(response);
    }
    else{
        return Promise.reject(response);
    }
},(error)=>{
    //服务器响应失败
    if(error.response.status){
        switch(error.response.status){
            /* 401 未授权 未登录状态,需要登陆以后才能访问 */
            //token失效
            case 401:
                // 清除 全局状态store token(前端) 和 缓存token(后端)
                //再跳转登录界面
                storage.removeStorage("token");
                this.$store.dispatch("setToken",null);
                router.replace({
                    path:'/login'
                });
            break;
            /* 403 服务器收到请求，但是拒绝提供服务 */   
            case 403:
                //直接路由跳转到登录界面
                router.replace({
                    path:'/login'
                });
            break;
            /* 404 无网络请求 页面丢失 */
            case 404:
                alert("网络请求不存在！");
                console.log(error.response);
            break;
            /* default:
                console.log(error.response.data.message);
            break; */
        }
    }
    return Promise.reject(error.response);
})
//封装get post请求
//1.get
/** 
*  @param url 请求地址
*  @param params 携带参数   
***/
export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:params
        }).then((result)=>{
            //响应数据
            resolve(result.data);
        }).catch((error)=>{
            reject(error);
        })
    })
}
//2.post
/** 
*  @param url 请求地址
*  @param params 携带参数   
***/
export function post(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,params).then((result)=>{
            //响应数据
            resolve(result.data);
        }).catch((error)=>{
            reject(error);
        })
    })
}
