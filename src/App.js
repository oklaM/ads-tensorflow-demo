import React, { Component } from 'react';
import './App.css';
import Demo1 from './component/Demo1';

import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  
 class App extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Demo</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="laptop" />simulation</span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{
            background: '#fff', padding: 24, margin: 0, minHeight: 280,
          }}
          >
           <Demo1/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
      );
    }
  }

export default App;
