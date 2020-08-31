import React from "react"
import "antd/dist/antd.css"
import { Layout, Affix, Row, Col, Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import { nav } from "../routers/index"
function Header() {

    var pathName = useLocation();

    let activeIndex =  nav.findIndex(item=>{
        return item.to === pathName.pathname;
    })

    return <Affix offsetTop={0}>
        <Layout.Header id="header">
            <div className="wrap">
                <Row>
                    <Col xs={24} sm={4}>
                        <h1 className="logo">
                            <Link to="/">我的博客</Link>
                        </h1>
                    </Col>
                    <Col sx={24} sm={20}>
                        <Menu 
                            mode={"horizontal"} 
                            theme={"dark"}
                            selectedKeys={[activeIndex+""]}
                        >
                            {
                                nav.map((item, index)=>{
                                    return <Menu.Item key={index}>
                                        <Link to={item.to}>{item.txt}</Link>
                                    </Menu.Item>
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Layout.Header>
    </Affix>
}

export default Header;