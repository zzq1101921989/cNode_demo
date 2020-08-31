
// 用户评论组件 
import React, {Fragment} from "react"
import { Comment } from 'antd';
import {Link} from "react-router-dom"
import FromNow from "../component/fromNow"

export default function TopicComment(props) {
    let { data, index } = props
    return <Comment
        // 评论人的名字
        author={
            <Fragment>
                <Link to={`/user/${data.author.loginname}`} >
                    {data.author.loginname}
                </Link>
                <span className="timer">
                    发布于：<FromNow data={data.create_at} ></FromNow>
                </span>
            </Fragment>
        }
        key={index}
        avatar={data.author.avatar_url}
        content={
            <div
                dangerouslySetInnerHTML={{
                    __html: data.content
                }}
            ></div>
        }
    ></Comment>
}