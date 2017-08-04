
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {Header,template} from '../common/mixin';

// React component
class Counter extends Component {
    render() {
        const { value, onIncreaseClick ,onDecreaseClick} = this.props
        console.log(this.props);
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Decrease</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
    let {counter} = state;
    console.log('mapState to prop1s');
    console.log(state);
    return {
        value: counter.count
    }
}

export default template({
    id: 'counter',  //应用关联使用的redux
    component: Counter, //接收数据的组件入口
},mapStateToProps);
