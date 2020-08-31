// 通用列表组件

import React from "react"
import { List, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import TopicTag from "./topicTag";
import FromNow from "./fromNow";

export default function TopicsList(props) {
    let {loading, data} = props;
    return <List
        // 是否是加载动画的状态
        loading={loading}
        // 每一项数据的排列方方式
        itemLayout="vertical"
        // dataSource 用于存放数据
        dataSource={data}
        // 用于 处理上面的每一项数据
        renderItem={(item)=>{
            let { author, last_reply_at, good, top, tab, id, title} = item
            return <List.Item className="topic_list">
                <Col
                    xs={24}
                    md={22}
                >
                    <Link to={`/user/${author.loginname}`}>
                        <Avatar 
                            icon={<UserOutlined/>} 
                            src={author.avatar_url}
                            title={author.loginname}
                        ></Avatar>
                    </Link>
                    <TopicTag
                        top = { top ? "top" : (good ? "good" : tab)}
                    ></TopicTag>
                    <Link to={"/topic/"+ id}>{title}</Link>
                </Col>
                <Col
                    xs={0}
                    md={2}
                >
                    <FromNow data={last_reply_at} ></FromNow>
                </Col>
            </List.Item>
        }}
    ></List>
}