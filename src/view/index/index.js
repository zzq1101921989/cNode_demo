import React from 'react';
import { Link } from 'react-router-dom';
import IndexNav from './indexNav';
import IndexList from './indexList';
import IndexPaginaction from './indexPagination';
import {Modal} from "antd"

function IndexView(props) {
  return <div className="main">
    {/* 首页导航 */}
    <IndexNav></IndexNav>
    {/* 首页列表 */}
    <IndexList></IndexList>
    {/* 首页分页器 */}
    <IndexPaginaction></IndexPaginaction>
  </div>
}

export default IndexView;