/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import {Header,template} from '../common/mixin';
import {Tool} from '../../Config/Tool';
import * as mapDispatchToProps from '../../Redux/Action/Product'
import {connect} from 'react-redux'

class Products extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    // componentDidMount() {//获取数据
    //    let {loadData} = this.props;
    //     loadData('/users');
    // }
    render() {
        const {products} = this.props
        console.log('products .....');
        console.log(products);
        console.log('products .....');
        return (
            <div>
                <h2>产品列表</h2>
                <ul>

                </ul>
            </div>
        );
    }
}




const mapStateToProps = (state)=> {
    console.log('mapStateToProps ========products ');
    console.log(state);
    console.log('mapStateToProps ========products ');
    let {fetchData} = state;
    console.log(state);
    return {
        state: fetchData,
        products: fetchData.get('data')
    }
}
export default template({
    id: 'homepage',  //应用关联使用的redux
    component: Products, //接收数据的组件入口
    url: '/users',
},mapStateToProps);


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Products)