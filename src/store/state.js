let state={
    token:null, //存储用户token
    userid:null,  //存储用户的id
    user:null,  //存储用户信息

    nowPage:1, //当前页
    pageNum:5, //一页显示多少条
    totleNum:0, //总条数
    allData:null, //存储产生的数据
    searchData:null, //存储的搜索数据

}
export default state;