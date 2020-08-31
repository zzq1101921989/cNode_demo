import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux"
import qs from "qs"
import { useGetTopicList } from '../../store/action';
// 引用通用组件
import TopicsList from '../../component/topicsList';

function IndexList() {
    // 获取 store状态参数的hooks 注意 有一些 hooks 是需要传递参数的
    let { loading, data } = useSelector(state=>state.topicList);
    // ?tab=all&page=1
    let { search } = useLocation();
    // qs 模板用来解析  search
    let {tab="all", page=1} = qs.parse(search.substr(1));
    let getTolist = useGetTopicList();

    // 生命周期的 hooks 根据 tab和 page的变化 其实也就是url的变化，来判断组件的更新周期和挂载周期
    useEffect(()=>{
        getTolist(tab, page);
    },[tab, page]);

    return <TopicsList
        loading={loading}
        data={data}
    ></TopicsList>
}

export default IndexList;