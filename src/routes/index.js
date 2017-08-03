/**
 * Created by admin on 2017/8/2.
 */
import App from '../App';
import Homepage from '../Components/homepage/Homepage'
import noFoundComponent from '../Components/404'
import Login from '../Components/Login/Login'


//首页
const home ={ path: 'home',
    component: Homepage
}

//我的分析

const getChildRoutes = (location, cb) => {
    require.ensure([], require => {
        cb(null, [
            home,
            require('./workbench-route').default,
            require('./report-route').default,
            require('./analysis-route').default,
            require('./showcase-route').default,
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