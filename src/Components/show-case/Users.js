/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import * as mapDispatchToProps from '../../Redux/Action/show-case/Users'
import {connect} from 'react-redux'

import {Table, Popconfirm, Button} from 'antd';

import Counter from './Counter'


class Products extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    componentDidMount() {//获取数据
        let {loadData} = this.props;
        loadData('/users');
    }

    render() {
        let {users, state, onDelete} = this.props;
        users = users || [];

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
                <Counter></Counter>
                <h2>用户列表</h2>
                <Table columns={columns} dataSource={users}/>
            </div>
        );
    }
}


const mapStateToProps = (state)=> {
    let {users} = state;
    console.log('mapStateToProps===================');
    console.log(users);
    console.log('mapStateToProps===================');
    return {
        isFetching: users.isFetching,
        users: users.data
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
