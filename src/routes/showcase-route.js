/**
 * Created by admin on 2017/8/2.
 */
import React,{Component} from 'react'
//产品列表
const Products = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Components/show-case/Product').default)
    },'products')
}
//计数器
const Counter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Components/show-case/Counter').default)
    },'Counter')
}
class Index extends Component{
    render() {
        return (
            <div style={{height:'100%'}}>
                {this.props.children}
            </div>
        );
    }
}

const Router = {
    path: 'showcase',
    component: Index,
    childRoutes: [
        {path: 'products', getComponent: Products},
        {path: 'counter', getComponent: Counter},
    ]
}
export default Router;