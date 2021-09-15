let getter = {
    GET_USERINFO(state) {
        return state.user;
    },
    //获取当前数据分页的数据
    get_page_data(state) {
        return args => {
            let nowPage = args.nowPage;
            let pageNum = args.pageNum;
            let allData = state.searchData;  //总数据改为搜索数据
            let slice = allData.slice((nowPage - 1) * pageNum, nowPage * pageNum);
            // console.log(slice);
            return slice;
        }
    },
    //查找过滤数据（仿模糊查找）
    filter_Data(state){
        return ({menuId,menuName,menuLeavel,menuType})=>{
            //过滤
            // console.log(menuId,menuName,menuLeavel,menuType);
            let list=[];
            state.allData.map((item)=>{
                if(item.menuId==menuId||item.menuName==menuName||item.menuLeavel==menuLeavel||item.menuType==menuType){
                    list.push(item);
                }
            });
            console.log(list);
            // if(!list.length) return 0;
            state.nowPage=1;
            state.searchData=list; 
            state.totleNum=list.length; 
        }
    }
}
export default getter;