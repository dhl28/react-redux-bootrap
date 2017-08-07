import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { Button } from 'antd';
import * as mapDispatchToProps from '../../Redux/Action/show-case/index'

import styles  from './counter.css'

// React component
class Main extends Component {
    render() {
        console.log('====styles')
        console.log(styles)
        console.log('====styles')
        const {value, onIncreaseClick, onDecreaseClick,loadData} = this.props
        console.log(this.props);
        return (
            <div className={styles.container}>
                <h2>计数器</h2>
                <span className={styles.value}>{value}</span>
                <Button  type="primary" onClick={onIncreaseClick}>+</Button>
                <Button onClick={onDecreaseClick}>-</Button>
                <Button onClick={()=>loadData('/users')}>刷新用户列表</Button>
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