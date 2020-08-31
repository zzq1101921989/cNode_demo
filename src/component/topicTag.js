
// 标记通用组件
import React from "react"
import { Tag } from 'antd';

// 根据数据的类型判断来返回不同的标签类型
function setTag(type){
    switch(type){
        case "top":
            return <Tag color="#87d068">置顶</Tag>
        case "good":
            return <Tag color="red">精华</Tag>
        case "share":
            return <Tag color="green">分享</Tag>
        case "ask":
            return <Tag color="#ccc">问答</Tag>
        case "job":
            return <Tag color="blue">招聘</Tag>
        case "dev":
            return <Tag color="puple">测试</Tag>
        default:
            return <Tag color="#999">未知</Tag>
    }
}

export default function TopicTag(props) {
    let {top} = props
    return setTag(top)
}