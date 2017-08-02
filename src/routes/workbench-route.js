/**
 * Created by admin on 2017/8/2.
 */

//工作台-首页
const workbench = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../workbench/index').default)
    }, 'workbench')
}
//故事板
const storyboard = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../workbench/story-board/index').default)
    }, 'storyboard')
}

const workbenchRoute = {
    path: 'workbench',
    getComponent: workbench,
    childRoutes: [
        {path: 'storyboard', getComponent: storyboard}
    ]
}
export default workbenchRoute;