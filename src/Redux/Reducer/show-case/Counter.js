/**
 * Created by admin on 2017/8/4.
 */
import {INCREASE,DECREASE} from  '../../Action/show-case/Counter'
export const counter = (state = { count: 0 }, action)=> {
    const count = state.count
    console.log('counter reducer ..'+action.type);
    switch (action.type) {
        case INCREASE:
            return { count: count + 1 }
        case DECREASE:
            return { count: count - 1 }
        default:
            return state
    }
}