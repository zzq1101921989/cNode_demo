import axios from "axios"
import { useDispatch } from "react-redux"

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
})

// 获取列表 自定义 hooks - action
function useGetTopicList() {
    
    let dispatch = useDispatch();
    
    return async function (tab, page, limit=15) {

        dispatch({
            type: "TOPICLIST_LOADING",
        })
        // 异步改成同步的写法 通过 async 不再是then里面去拿数据
        let result = await http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`)
            
        dispatch({
            type: "TOPICLIST_LOADED",
            data: result.data.data
        })
    }
}

// 获取文章详情的 自定义 hooks - action
function useGetTopicDetalis() { 

    let dispatch = useDispatch(); 

    return function (id){

        dispatch({
            type: "GET_TOPIC_DETAILSLOADING",
        })

        http.get(`/topic/${id}`).then(res=>{
            dispatch({
                type: "GET_TOPIC_DETAILS",
                data:res.data.data
            })
        }).catch(err=>{
            dispatch({
                type: "GET_TOPIC_ERROR",
                err_data:err.response.data.error_msg
            })
        })
    } 
}

// 获取用户首页信息的 自定义 hooks - action
function useGetUserMsg(){

    let dispatch = useDispatch();
    
    return async function (userID) {

        dispatch({
            type: "USER_LOADING"
        })

        let res = await http.get(`/user/${userID}`);

        dispatch({
            type: "USER_LOADINGED",
            data: res.data.data
        })
    }
    
}

export { useGetTopicList, useGetTopicDetalis, useGetUserMsg };