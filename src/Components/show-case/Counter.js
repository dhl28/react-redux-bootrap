import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { Button } from 'antd';
import * as mapDispatchToProps from '../../Redux/Action/show-case/Counter'

import './counter.css'

// React component
class Main extends Component {
    render() {
        const {value, onIncreaseClick, onDecreaseClick} = this.props
        console.log(this.props);
        return (
            <div className="counter-wrapper">
                <h2>计数器</h2>
                <span className="value">{value}</span>
                <Button  type="primary" onClick={onIncreaseClick}>+</Button>
                <Button onClick={onDecreaseClick}>-</Button>
            </div>
        )
    }
}

Main.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}

const mapStateToProps = (state)=> {
    let {counter} = state;
    console.log(state);
    return {
        value: counter.count
    }
}


 const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default Counter