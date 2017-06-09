/**
 * Created by zll on 2017/6/8.
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route,Link} from 'react-router-dom';
import styles from './css/home.css';
import logoImg from './images/jinghui.png' ;
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

const Lists = ({ match }) => (
    <div>
        <h3>{match.params.ListsId}</h3>
    </div>
);

const List = ({ match }) => (
    <div>
        <h2>我是一个列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/我是第一个哈哈`}>
                    列表下边的第一个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第二个呵呵`}>
                    列表下边的第二个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第三个嘿嘿`}>
                    列表下边的第三个
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:ListsId`} component={Lists}/>
        <Route exact path={match.url} render={() => (
            <h3>点击上边的列表项此处显示与url地址一样的...</h3>
        )}/>
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
                                <Menu.Item key="3"><Link to="/Home/Lists">一个列表</Link></Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            <Route exact path="/Home" component={One}/>
                            <Route path="/Home/two" component={Two}/>
                            <Route path="/Home/Lists" component={List}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}