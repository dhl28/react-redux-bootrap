/**
 * Created by admin on 2017/8/2.
 */

//产品列表
const Products = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Components/show-case/Products').default)
    },'products')
}

const workbenchRoute = {
    path: 'showcase',
    getComponent: Products,
    childRoutes: [
        {path: 'products', getComponent: Products}
    ]
}
export default workbenchRoute;