/**
 * Created by admin on 2017/8/4.
 */
// Action Creator
const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }


export const onIncreaseClick = () => {
    console.log('click increase');
    return(dispatch)=> dispatch(increaseAction);
}
export const onDecreaseClick = () => {
    console.log('click decrease');
    return(dispatch)=> dispatch(decreaseAction);
}