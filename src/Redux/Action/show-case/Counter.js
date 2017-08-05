/**
 * Created by admin on 2017/8/4.
 */
export const INCREASE = 'increase'
export const DECREASE = 'decrease'
// Action Creator
const increaseAction = { type: INCREASE }
const decreaseAction = { type: DECREASE }


export const onIncreaseClick = () => {
    console.log('click increase');
    return(dispatch)=> dispatch(increaseAction);
}
export const onDecreaseClick = () => {
    console.log('click decrease');
    return(dispatch)=> dispatch(decreaseAction);
}