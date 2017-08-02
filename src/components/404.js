/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import './404.css';
class noFoundComponent extends Component {
    render() {
        return (
            <div className="content center-block">
                <h2>404</h2>
                <Link to="/home"><a className="to-home">返回首页</a></Link>
            </div>
        );
    }
}

export default noFoundComponent;
