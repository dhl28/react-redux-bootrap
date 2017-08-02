/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import {Menu, Icon} from 'antd';

class Header extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Link to="/workbench">工作台</Link>
                </Menu.Item>
                <Menu.Item key="reprot">
                    <Link to="/report">填报</Link>
                </Menu.Item>
                <Menu.Item key="analysis">
                    <Link to="/analysis">我的分析</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;
