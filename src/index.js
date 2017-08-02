import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute,browserHistory } from 'react-router'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routeConfig from './routes/index'

ReactDOM.render(
    <Router  history={browserHistory} routes={routeConfig}>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
