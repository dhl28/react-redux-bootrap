/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';

class Homepage extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <h2>首页</h2>
            </div>
        );
    }
}

export default Homepage;
