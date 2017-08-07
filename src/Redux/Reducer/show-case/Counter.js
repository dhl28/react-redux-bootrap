/**
 * Created by admin on 2017/8/4.
 */
import {INCREASE, DECREASE} from  '../../Action/show-case/Counter'
import {USER_DELETE} from  '../../Action/show-case/Users'
export const counter = (state = {count: 0}, action)=> {
    const count = state.count
    console.log('counter reducer ..' + action.type);
    switch (action.type) {
        case INCREASE:
            return {count: count + 1}
        case DECREASE:
            return {count: count - 1}
        case USER_DELETE:
            return {count: 0}

        default:
            return state
    }
}