import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import qs from "qs"
import { indexNav } from '../../routers';

function IndexNav() {

    let { search } = useLocation();
    // qs库的 parse 格式化 ?tab=all 这样转换成一个对象的形式返回
    let { tab="all" } = qs.parse(search.substr(1));
    // 判断并且返回索引，然后下面根据这个属性来进行选中
    let activeKey = indexNav.findIndex(item=>item.type === tab);   

    return <Menu
                mode="horizontal"
                selectedKeys={[activeKey+""]}
            >
                {
                    indexNav.map((item,index)=>{
                        return <Menu.Item key={index}>
                            <Link to={item.to}>{item.name}</Link>
                        </Menu.Item>
                    })
                }
        </Menu>
}

export default IndexNav;