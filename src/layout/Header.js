/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
                <SubMenu title={<span>react组件实例</span>}>
                    <Menu.Item key="showcase">
                        <Link to="/showcase/users">用户列表</Link>
                    </Menu.Item>
                    <Menu.Item key="counter">
                        <Link to="/showcase/counter">计数器</Link>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        );
    }
}

export default Header;
