import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './Redux/Store/Store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routeConfig from './routes/index'

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routeConfig}>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
