import { render } from '@testing-library/react';
import React , { Component } from 'react';
import FeedCities from './FeedCities';
import FeedList from './FeedList';

const FeedMain = () => {
    return (
        <div>
            <div className="ui veritically divided grid">
                <div className="two column row">
                    <div className="column four wide">
                        <FeedCities />
                    </div>
                    <div className="column ten wide">
                        <FeedList />
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default FeedMain;