/**
 * Created by admin on 2017/8/2.
 */

const report = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Components/report/index').default)
    }, 'report')
}


const reportRoute = {
    path: 'report',
    getComponent: report
}
export default reportRoute;