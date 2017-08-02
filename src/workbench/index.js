/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';

class WorkbenchIndex extends Component {
    render() {
        return (
            <div>
                <h2>工作台</h2>
                {this.props.children}
            </div>
        );
    }
}

export default WorkbenchIndex;
