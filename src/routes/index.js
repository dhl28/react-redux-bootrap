/**
 * Created by admin on 2017/8/2.
 */
import App from '../App';
import Homepage from '../homepage/Homepage'
import noFoundComponent from '../components/404'
import Login from './../components/Login/Login'

const test = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/show-case/Products').default)
    },'test')
}
//首页
const home ={ path: 'home',
    getComponent: test
}

//我的分析

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
        path: '/login',
        component: Login,
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