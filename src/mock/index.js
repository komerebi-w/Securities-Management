import Vue from 'vue'
import Mock from 'mockjs'
import store from '@/store/index.js' 
let Base64 = require('js-base64').Base64
Vue.use(Mock);
//模拟用户的账号密码
let userid='admin';
let userpwd='123';
/* 模拟登陆 */
Mock.mock('/userlogin',(config)=>{
    let body=JSON.parse(config.body); //转为JSON数据
    let id=body.id;
    let pwd=body.pwd;
    let token='Token666';
    if(id==userid&&pwd==userpwd){
        return {
            states:'ok',
            result:{
                //token一般都加密
                token:Base64.encode(token)
            }
        }
    }
    else{
        return {
            states:'error',
            result:{

            }
        }
    }
    
});
/* 模拟获取用户信息 */
Mock.mock('/getUser','post',(config)=>{
    // console.log(config);
    let useradmin=JSON.parse(config.body).id;
    if(useradmin=="admin"){
        return {
            status:'ok',
            data:{
                name:'happy_xiaoW',
                face:'/static/image/face.jpg'
            }
        }
    }
    else{
        return {
            states:'error',
            result:{

            }
        }
    }
})
/* 模拟返回home数据 */
Mock.mock('/getHome',()=>{
    return{
        status:'ok',
        data:{
            logo:'/static/image/company_logo.png',
            name:'御金汇公司',
            detail:'公司负责东南亚市场, 分管黑马证券、传智证券',
            down:3,
            syspeople:12,
            removedai:3,
            zhuandai:12,
            pwdreset:3,
            dainame:12,
            tongdata:[
                { value: 234, name: "撤单" },
                { value: 335, name: "待成交" },
                { value: 310, name: "部分成交" },
                { value: 234, name: "完成" },
                { value: 200, name: "其他" },
            ],
            yuntable:[
                { value: 5, name: "2021年1月" },
                { value: 20, name: "2021年2月" },
                { value: 36, name: "2021年3月" },
                { value: 10, name: "2021年4月" },
                { value: 10, name: "2021年5月" },
                { value: 20, name: "2021年6月" },
            ],
            msg:[
                {name:'成交通知',time:'2021-5-20'},
                {name:'用户注册通知',time:'2021-1-01'},
                {name:'成交通知',time:'2021-3-22'},
            ],
            sysmsg:['机构调整公告','系统升级公告','日志更新公告'],
            syshelp:['帮助手册V3.0','帮助手册V2.0','帮助手册V1.0'],
        }
    }
})
/* 模拟机构权限的数据 */
let Data=Mock.mock({
    "data|100-200":[
        {
            'id|+1':1,  //生成每次+1的数
            'menuId':'@string()',  //随机生成字符串(长度不定)
            'menuName|1':["系统管理","公司管理","机构菜单管理","机构类型管理","机构角色管理","产品列表"],  //随机生成数组中的一个
            // 'menuType':"交易商", //全部为交易商
            'menuType|1':["运营中心","交易商","顶层公司/集团"],
            // 'menuUrl':`/${Mock.Random.string('lower', 5)}`, //'/'+五个长度的小写随机字符串
            'menuUrl':'@string("lower", 5)', //'/'+五个长度的小写随机字符串
            'menuLeavel|1':["一级菜单","二级菜单","三级菜单"],
            'parentNum':'@string()',
            'parentName|1': ["公司管理","机构权限管理","客户账户列表","系统操作用户管理","产品管理","客户管理"],
        }
    ]
})
store.commit('save_data',Data.data);
Mock.mock('/getMenuData',(config)=>{
    /* return{
        status:'ok',
        data:Data
    } */
    let body=JSON.parse(config.body); //{nowPage: 1, pageNum: 10}
    
    /* store.commit('get_page_data',body);
    console.log(store.state.Pagedata); */
    // return result;
    // return Data; //直接返回模拟的数据，少嵌套几层
    let data=store.getters.get_page_data(body);
    // console.log(data);
    return data;
})