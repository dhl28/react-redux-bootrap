/**
 * Created by admin on 2017/8/4.
 */
export const counter = (state = { count: 0 }, action)=> {
    const count = state.count
    console.log('counter reducer ..'+action.type);
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'decrease':
            return { count: count - 1 }
        default:
            return state
    }
}