/**
 * Created by zll on 2017/6/8.
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route,Link} from 'react-router-dom';
import styles from './css/home.css';
import logoImg from './images/jinghui.png' ;

// import BaynoetCompnet from './components/BayonetComponent';
import Bayonet from './containers/Bayonet';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const One = () => (
    <div>
        <h2>首页</h2>
    </div>
);

const Two = () => (
    <div>
        <h2>我是第二页</h2>
    </div>
);


export  default class  extends React.Component {
    render() {
        return (
            <Layout className={styles.fullScreen}>
                <Header className={styles.header}>
                    <div >
                        <span className={styles.header1}>
                            <img className={styles.logo} src={logoImg} />
                        </span>
                        <span className={styles.header11}> 周口预警防控平台</span>
                        <span className={styles.header2}>欢迎您 ,宋志玮</span>
                    </div>

                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                <Menu.Item key="1" > <Link to="/Home">首页</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/Home/two">第二页</Link></Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                <Menu.Item key="5"><Link to="/Home/bayonet">卡口设备</Link></Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 12px 12px'}}>
                        <Content style={{background: '#fff', padding: 10, margin: 0, minHeight: 280}}>
                            <Route exact path="/Home" component={One}/>
                            <Route path="/Home/two" component={Two}/>
                            <Route path="/Home/bayonet" component={Bayonet}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}