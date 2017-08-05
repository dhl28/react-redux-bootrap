/**
 * Created by admin on 2017/8/4.
 */
import {USER_DELETE} from  '../../Action/show-case/Users'
export const counter = (state = {users: [] }, action)=> {
    const count = state.count
    console.log('users reducer ..'+action.type);
    switch (action.type) {
        case USER_DELETE:
            return { state: {},users: [] }
        default:
            return state
    }
}