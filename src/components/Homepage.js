/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Header,template} from './common/mixin';

class Homepage extends Component {
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
            <div>
                <h2>首页</h2>
            </div>
        );
    }
}


export default template({
    id: 'saleRecord',  //应用关联使用的redux
    component: Homepage, //接收数据的组件入口
    url: '/users',
    data: {
        page:1,
        type:'UNAUDIT'
    }
});

