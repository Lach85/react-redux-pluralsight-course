import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from '../src/store/configureStore';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
// redux flux - instanciate store and provider

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);