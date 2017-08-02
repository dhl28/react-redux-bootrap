/**
 * Created by admin on 2017/8/2.
 */
import App from '../App';
import Homepage from '../homepage/Homepage'
import noFoundComponent from '../components/404'

//首页
const home ={ path: 'home',
    component: Homepage
}

//我的分析
const analysis = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../analysis/index').default)
    },'analysis')
}
const getChildRoutes = (location, cb) => {
    require.ensure([], require => {
        cb(null, [
            home,
            require('./workbench-route').default,
            require('./report-route').default,
            require('./analysis-route').default,
        ])
    })
}


const routeConfig = [
    { path: '/',
        component: App,
        indexRoute: { component: Homepage },
        getChildRoutes:getChildRoutes
    },
    {
        path: '/404',
        component: noFoundComponent,
    },
    {
        path: '*',
        indexRoute:{
            onEnter:function (nextState,replace) {
                return replace('/404')
            }
        }
    }
]
export default routeConfig;