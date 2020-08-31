
// 定义文章详情的 reducer 纯函数  
// 为什么 data 里面还要放一个用户信息呢？因为获取信息的请求是异步的，而且数据也是存放在 author这个字段里面的，模板挂载肯定是优先于请求数据的，这个时候数据没拿过来 模板挂载渲染 author 数据的时候就会找不到这个对象就会报错，为了防止报错，所以才需要定义一个空的 author 对象

function topicDetails(details={
    loading: true,
    data:{
        author:{}
    },
    isError: false,
    error_msg: ""
},action) {
    switch(action.type){
        case "GET_TOPIC_DETAILSLOADING":
            return {
                loading:true,
                data:{
                    author:{}
                },
                isError: false,
                error_msg: ""
            }
        case "GET_TOPIC_DETAILS":
            return {
                loading:false,
                data:action.data,
                isError: false,
                error_msg: ""
            }
        case "GET_TOPIC_ERROR":
            return {
                loading:false,
                data:{
                    author:{}
                },
                isError: true,
                error_msg: action.err_data
            }
        default:
            return details;
    }
}

export default topicDetails;