let mutation={
    removeToken(state){
        state.token=null;
    },
    setToken(state,args){
        if(args){
            state.token=args;
        }
        else{
            state.token=null;
        }
    },

    saveUserid(state,args){
        if(args){
            state.userid=args;
        }
        else{
            state.userid=null;
        }
    },
    setUserinfo(state,args){
        if(args){
            state.user=args;
        }
    },
    //存储产生的所有数据
    save_data(state,args){
        if(args){
            state.allData=args;
            state.searchData=args; 
            state.totleNum=args.length;
            // state.totlePage=Math.ceil(args.length/state.pageNum);
        }
    },
    //修改一页显示多少条数据
    update_pageNum(state,args){
        if(args){
            state.pageNum=args;
        }
    },
    //修改当前页码
    update_nowPage(state,args){
        if(args){
            state.nowPage=args;
        }
    },
    //搜索条件不存在，搜索数据为全数据
    set_searchData(state){
        state.searchData=state.allData;
        state.totleNum=state.allData.length;
    },
    //增加数据的方法
    insert_allData(state,args){
        if(args){
            args.id=state.allData.length+1;
            args.parentNum=Math.random().toString(36).slice(7); //0.ecipugddxii 长度固定的0.字符串
            state.allData.push(args);
            this.commit('set_searchData'); //this指向当前store
            /* state.searchData=state.allData;
            state.totleNum=state.allData.length; */
        }
    },
    //修改总数据
    update_allData(state,args){
        if(args){
            state.allData.map((item)=>{
                if(item.id===args.id){
                    //属性修改
                    // item=args;
                    item.menuId=args.menuId;
                    item.menuName=args.menuName;
                    item.menuType=args.menuType;
                    item.menuUrl=args.menuUrl;
                    item.menuLeavel=args.menuLeavel;
                    item.parentName=args.parentName;
                }
            })
            this.commit('set_searchData');
        }
    },
    //删除总数据
    delete_allData(state,args){
        let flagId=0;
        if(args){
            state.allData.map((item)=>{
                if(item.id===args.id){
                    flagId=item.id;
                    console.log(flagId);
                    state.allData.splice(item.id-1,1); //从总数据中删除改行数据
                }
            })
            this.commit('set_searchData');
        }
        //修改Id值
        if(flagId!=0){
            state.allData.map((item)=>{
                if(item.id>flagId){
                    item.id=item.id-1;
                }
            })
        }

    }
}
export default mutation;