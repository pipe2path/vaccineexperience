import React from 'react';
import { Router, Route } from 'react-router-dom';
import FeedMain from './FeedMain';
import FeedCreate from './FeedCreate';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className = "ui container">
            <Router history={history}>
            <div>
                <Header />
                <Route path="/" exact component={FeedMain} />
                <Route path="/feeds/new" exact component={FeedCreate} />
            </div>
            </Router>
        </div>
    );
}

export default App;