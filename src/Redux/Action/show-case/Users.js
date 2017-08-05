/**
 * Created by admin on 2017/8/4.
 */
export const USER_DELETE = 'USER_DELETE';
// Action Creator
const delAction = { type: USER_DELETE }

export const onDelete = () => {
    return(dispatch)=> dispatch(delAction);
}
