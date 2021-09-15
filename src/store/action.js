let action={
    REMOVE_TOKEN({commit}){
        commit('removeToken');
    },
    SET_TOKEN_USER({commit},args){
        // console.log(args);  //{token: "VG9rZW42NjY=", userid: "admin"}
        commit('setToken',args.token);
        commit('saveUserid',args.userid);
    },
    SAVE_USERINFO({commit},args){
        commit('setUserinfo',args);
    },
}
export default action;