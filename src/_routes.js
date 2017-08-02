/**
 * Created by admin on 2017/8/2.
 */
import App from './App';
import Homepage from './homepage/Homepage'

//工作台
const workbench = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./workbench/index').default)
    },'workbench')
}
//故事板
const storyboard = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./workbench/story-board/index').default)
    },'storyboard')
}
//数据上报
const report = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./report/index').default)
    },'report')
}
//我的分析
const analysis = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./analysis/index').default)
    },'analysis')
}

const routeConfig = [
    { path: '/',
        component: App,
        indexRoute: { component: Homepage },
        childRoutes: [
            { path: 'home', component: Homepage },
            { path: 'report', getComponent:report},
            { path: 'analysis', getComponent: analysis },
            { path: 'workbench',
                getComponent: workbench,
                childRoutes: [
                    { path: 'storyboard', getComponent: storyboard }
                ]
            }
        ]
    }
]
export default routeConfig;