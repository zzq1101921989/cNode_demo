import React from 'react';
import { routes } from "./routers/index";
import { Route, Switch } from 'react-router-dom';
import {Layout } from "antd"
// 两个公共组件
import Header from './component/header';
import Footer from './component/footer';
import "./static/css/base.css"

function App() {
  return <Layout className="layout">
        <Header></Header>
        <Layout.Content className="layout-content">
          <div className="wrap">
            <Switch>
                {
                  routes.map((item, index)=>{
                    return <Route
                      key={index}
                      path={item.path}
                      exact={item.exact}
                      render={(props)=>{
                        return item.render(props)
                      }}
                    ></Route>
                  })
                }
            </Switch>
          </div>
        </Layout.Content>
        <Footer></Footer>
      </Layout>
}

export default App;
