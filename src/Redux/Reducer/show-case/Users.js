/**
 * Created by admin on 2017/8/4.
 */
import {USER_DELETE,GET_USER_SUCCESS,START_GET_USER} from  '../../Action/show-case/Users'
export const users = (state = {users: [] }, action)=> {
    console.log('users reducer ..'+action.type);
    switch (action.type) {
        case START_GET_USER:
            return { isFetching:true}
        case GET_USER_SUCCESS:
            return {isFetching:false,data: action.json}
        case USER_DELETE:
            console.log(action.key);
            console.log(state);
            return { state: {},data: state.data.filter(item => item.key != action.key)}
        default:
            return state
    }
}