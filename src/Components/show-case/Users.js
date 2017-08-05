/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Header,template} from '../common/mixin';
import {Tool} from '../../Config/Tool';
import * as mapDispatchToProps from '../../Redux/Action/show-case/Users'
import {connect} from 'react-redux'

import { Table, Popconfirm, Button } from 'antd';




class Products extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        let {users,state,onDelete} = this.props;
        users = users||[];

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
            render: (text, record) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.key)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        }];

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
    console.log('mapStateToProps===================');
    return {
        state: fetchData,
        users: fetchData.get('data')
    }
}
export default template({
    id: 'homepage',  //应用关联使用的redux
    component: Products, //接收数据的组件入口
    url: '/users',
},mapStateToProps);
