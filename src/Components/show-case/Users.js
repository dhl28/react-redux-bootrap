/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Header,template} from '../common/mixin';
import {Tool} from '../../Config/Tool';
import * as mapDispatchToProps from '../../Redux/Action/Users'
import {connect} from 'react-redux'

import { Table, Icon } from 'antd';


const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
    ),
}];


class Products extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        let {users,state} = this.props;
        users = users||[];
        console.log('users .....');
        console.log(users);
        console.log('users .....');
        return (
            <div className="container">
                <h2>用户列表</h2>
                <Table columns={columns} dataSource={users} />
            </div>
        );
    }
}




const mapStateToProps = (state)=> {
    let {fetchData} = state;
    return {
        state: fetchData,
        users: fetchData.data
    }
}
export default template({
    id: 'homepage',  //应用关联使用的redux
    component: Products, //接收数据的组件入口
    url: '/users',
},mapStateToProps);
