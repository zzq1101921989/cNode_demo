import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from "qs"
import { Pagination } from 'antd';

function IndexPaginaction() {

    let { search } = useLocation();
    let { tab="all", page=1 } = qs.parse(search.substr(1));
    let history = useHistory();

    return <div className="index-pagination">
        <Pagination
            current={page-0}
            total={200}
            pageSize={15}
            responsive={true}
            showSizeChanger={false}
            onChange={(currentPage)=>{
                page = currentPage;
                let url = "?" + qs.stringify({tab, page});
                history.push(url)
            }}
        ></Pagination>
    </div>
}

export default IndexPaginaction;