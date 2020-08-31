// 文章详情页面

import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useGetTopicDetalis } from "../../store/action"
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Card, Alert, List } from 'antd';
import TopicTag from '../../component/topicTag';
import FromNow from '../../component/fromNow';
import TopicComment from '../../component/topicComment'
import "../../static/css/base.css"

function TopicView() {

  let { loading, data, isError, error_msg } = useSelector(state => state.topicDetails);

  // 解构出当前页面数据的相信信息 
  let { author, good, top, title, tab, visit_count, content, create_at, replies } = data;

  let history = useHistory();

  let getDetalis = useGetTopicDetalis();

  let { pathname } = useLocation();

  let id = pathname.split("/")[2];

  useEffect(() => {
    getDetalis(id);
  }, [id])

  return <Fragment>
    <Card
      className="topic-container"
      loading={loading}
      title={
        <Fragment>
          <h1>
            <TopicTag top={top ? "top" : (good ? "good" : tab)} ></TopicTag>
            {title}
          </h1>
          <p>
            作者：<Link to={`/user/${author.loginname}`}>{author.loginname} </Link>
            - 创建时间：<FromNow data={create_at} ></FromNow> 
            - 浏览人数：{visit_count}
          </p>
        </Fragment>
      }
      type="inner"
    >
      <div dangerouslySetInnerHTML={{
        __html: content
      }}></div>
    </Card>
    {/* 判断状态中的 isError 为真就代表出错了就需要显示 antd 中的组件了 */}
    {isError ? <Alert
      closable
      message="Error"
      description={error_msg}
      type="error"
      showIcon
      afterClose={() => {
        history.goBack();
      }}
    /> : ""}
    {/* 其他用户评论区 */}
    <Card
      className="user-comment"
      title="评论区域"
      type="inner"
    >
      <List
        pagination={{
          hideOnSinglePage:true,
          pageSize:8
        }}
        dataSource={replies}
        renderItem={(item,index)=>{
          return <TopicComment
              data={item}
              index={index}
          ></TopicComment>
        }}
      >
      </List>
    </Card>
  </Fragment>
}

export default TopicView;