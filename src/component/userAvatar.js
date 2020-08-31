import React from "react"
import { Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';
import FromNow from "./fromNow";

export default function UserAvatar(props) {

    let {userData} = props;

    let {avatar_url, create_at, githubUsername, loginname, score} = userData;

    return <div className="user-top">
        <Avatar
            icon = { <UserOutlined/> }
            size = {80}
            src = {avatar_url}
        ></Avatar>
        <div className="user-msg">
            <div>用户名：{loginname}</div>
            <div>注册时间：
                <FromNow data={create_at} ></FromNow>
            </div>
            <div>积分：{score}</div>
        </div>
        <p>github: <a href={`https://github.com/${githubUsername}`}>
            {`https://github.com/${githubUsername}`}
            </a>
        </p>
    </div>
}