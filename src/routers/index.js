import React from "react"
import IndexView from "../view/index"
import UserView from "../view/user/user"
import AboutView from "../view/about/about"
import GetStartView from "../view/getStart/getStart"
import TopicView from "../view/topic/topic"
import View404 from "../view/404/404"
import qs from "qs"

// 文章类型的分类
const types = ["all", "ask", "share", "job", "good", "dev"]
const routes = [
    {
        path: "/",
        exact: true,
        render(props){

            let { location } = props
            let { search } = location
            let {tab, page} = qs.parse(search.substr(1));

            // 因为搜索规则不符合要求，直接返回404 请求都不走。性能比较好
            if(tab===undefined && page === undefined 
                || types.includes(tab) && (page === undefined || page > 0)){
                    return <IndexView {...props} />
                }
                return <View404 {...props}></View404>
        }
    },
    {
        path: "/user/:username",
        exact: true,
        render(props){
            return <UserView {...props} />
        }
    },
    {
        path: "/about",
        exact: true,
        render(props){
            return <AboutView {...props} />
        }
    },
    {
        path: "/topic/:id",
        exact: true,
        render(props){
            return <TopicView {...props} />
        }
    },
    {
        path: "/getStart",
        exact: true,
        render(props){
            return <GetStartView {...props} />
        }
    },
    // 二级path相对于queryString来说会比较难一些，因为需要判断的东西比较多
    // {
    //     path: ["/", "/:tab", "/:tab/:page"],
    //     exact: true,
    //     render(props){
    //         const { tab="all",page=1 } = props.match.params;
    //         if(types.includes(tab) && page>0){
    //             props.match.params.tab = tab
    //             props.match.params.page = page
    //             return <IndexView {...props} />
    //         }
    //         return  <View404 {...props} />
    //     }
    // },
    {
        path: "",
        render(props){
            return <View404 {...props} />
        }
    }

]

const nav = [
    {
        to: "/",
        txt: "首页"
    },
    {
        to: "/getStart",
        txt: "新手入门"
    },
    {
        to: "/about",
        txt: "关于我们"
    },
]

const indexNav = [
    {
        to: "/?tab=all",
        name: "全部",
        type: "all"
    }, 
    {
        to: "/?tab=good",
        name: "精华",
        type: "good"
    }, 
    {
        to: "/?tab=share",
        name: "分享",
        type: "share"
    }, 
    {
        to: "/?tab=ask",
        name: "问答",
        type: "ask"
    }, 
    {
        to: "/?tab=job",
        name: "招聘",
        type: "job"
    }, 
    {
        to: "/?tab=dev",
        name: "客户端测试",
        type: "dev"
    }, 
]

export {routes, nav, indexNav};