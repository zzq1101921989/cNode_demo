
// 用户信息的 reducer 函数

function userMsg(users={
    loading: true,
    data:{}
},action) {
    switch(action.type){
        // 用户信息加载中
        case "USER_LOADING":
            return {
                loading: true,
                data:{}
            }
        case "USER_LOADINGED":
            return {
                loading: false,
                data:action.data
            }
        default:
            return users;
    }
}

export default userMsg;