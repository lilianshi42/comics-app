import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Comic from "./components/Comic";
import About from "./components/About";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router forceRefresh>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys=""
            selectedKeys=""
          >
            <Menu.Item key="/">
              <NavLink to="/">
                Cyber City Comics
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/about">
              <NavLink to="/about">
                About
              </NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 0px" }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={Comic} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Cyber City Comics ©2021 Created by Lilian Shi
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
