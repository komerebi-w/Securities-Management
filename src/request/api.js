import { get,post} from "./http";

/* 下面定义api */
//获取用户登录接口
export const userLogin=(args)=>post('/userlogin',args); 

//获取用户信息接口(根据用户标志)
export const userInfo=(args)=>post('/getUser',args); //执行后直接返回Promise

//获取home首页数据
export const getHomeDate=()=>post('/getHome');

//获取机构权限数据
export const getMenuList=(args)=>post('/getMenuData',args);

 