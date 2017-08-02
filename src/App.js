import React,{Component} from 'react'

import Header from './layout/Header'

class App extends Component{
    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        );
    }
}

export default App;