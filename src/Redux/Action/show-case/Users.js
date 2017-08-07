/**
 * Created by admin on 2017/8/4.
 */
/**
 * Created by admin on 2017/8/4.
 */
import {fetchPosts} from '../Util';


export const START_GET_USER = 'START_GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const USER_DELETE = 'USER_DELETE';
export const RELOAD_USER = 'RELOAD_USER';

export const loadData = (path, postData) => {
    return dispatch => {
        dispatch({type: START_GET_USER});
        return fetch(path, {
            mode: 'cors',
            "Content-Type": "application/json",
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => dispatch({
                        type: GET_USER_SUCCESS,
                        json: json
                    }))
                } else {
                    console.log("status", response.status);
                }
            })
            .catch(error => console.log(error))
    }
}

// Action Creator
const delAction = (key)=> {
    return {type: USER_DELETE, key: key}
}

export const onDelete = (key) => {
    return (dispatch)=> dispatch(delAction(key));
}
