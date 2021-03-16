import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.querySelector('#root')
);