/**
 * Created by admin on 2017/8/2.
 */
const analysis = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../analysis/index').default)
    }, 'analysis')
}

const analysisRoute = {
    path: 'analysis',
    getComponent: analysis
}
export default analysisRoute;