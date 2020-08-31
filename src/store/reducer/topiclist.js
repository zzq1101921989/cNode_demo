
// 定义文章列表数据的 reducer 纯函数

function topicList(list={
    loading: true,
    data:[]
},action) {
    switch(action.type){
        case "TOPICLIST_LOADING":
            return {
                loading: true,
                data:[]
            }
        case "TOPICLIST_LOADED":
            return {
                loading: false,
                data: action.data
            }
    }
    return list
}

export default topicList;