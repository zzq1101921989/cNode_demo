import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useGetUserMsg } from "../../store/action/index"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserAvatar from '../../component/userAvatar';
import TopicsList from '../../component/topicsList';

function UserView() {

  // 获取获取用户信息的自定义 hook
  let userGetMsg = useGetUserMsg();
  // 通过内置 hook 获取 store中的 user 的状态
  let { data, loading } = useSelector(state=>state.userMsg);
  // 通过 hook 获取参数
  let pathname = useParams();
  // 用户名 用于请求数据
  let { username } = pathname;
  // 解构请求到的数据
  let { recent_replies=[], recent_topics=[] } = data;

  useEffect(()=>{
    userGetMsg(username)
  }, [username])

  return <div className="user-page">
      <Card
        loading={loading}
        type="inner"
        title="主页信息"
      >
        <UserAvatar
          userData = {data}
        ></UserAvatar>
      </Card>
      <Card
        loading={loading}
        type="inner"
        title="最近创建的话题"
      >
        <TopicsList
          loading={loading}
          data={recent_topics}
        ></TopicsList>
      </Card>
      <Card
        loading={loading}
        type="inner"
        title="最近参与的话题"
      >
        <TopicsList
          loading={loading}
          data={recent_replies}
        ></TopicsList>
      </Card>
  </div>
}

export default UserView;