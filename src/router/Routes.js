//组件懒加载
let Index=()=>import('@/view/Index.vue');
let Login=()=>import('@/view/Login.vue');
let Home=()=>import('@/view/page/Home.vue');
let Mechanism_menu=()=>import('@/view/page/mechanism_menu.vue');
let Mechanism_role=()=>import('@/view/page/mechanism_role.vue');
let Systemuser=()=>import('@/view/page/systemuser.vue');
let Product_type=()=>import('@/view/page/product_type.vue');
let Product_list=()=>import('@/view/page/product_list.vue');
//路由配置文件
let routes=[
    {
        path:'/',
        name:'index',
        component:Index,
        meta:{
            isAuthorToken:true,
        },
        //进入主页 重定向home首页
        redirect:{
            path:'/index' 
        },
        children:[
            {
                path:'index',
                name:'home',
                component:Home,
                meta:{
                    isAuthorToken:true, //也需要监测是否登陆
                }, 
            },
            {
                path:'mechanism/menu',
                name:'mechanism_menu',
                component:Mechanism_menu,
                meta:{
                    isAuthorToken:true, 
                }, 
            },
            {
                path:'mechanism/role',
                name:'mechanism_role',
                component:Mechanism_role,
                meta:{
                    isAuthorToken:true, 
                }, 
            },
            {
                path:'systemuser',
                name:'systemuser',
                component:Systemuser,
                meta:{
                    isAuthorToken:true, 
                }, 
            },
            {
                path:'product/type',
                name:'product_type',
                component:Product_type,
                meta:{
                    isAuthorToken:true, 
                }, 
            },
            {
                path:'product/list',
                name:'product_list',
                component:Product_list,
                meta:{
                    isAuthorToken:true, 
                }, 
            },

        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login,
        meta:{
            // isAuthorToken:false,
        } 
    },
]
export default routes;