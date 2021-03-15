import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2 className="ui center aligned icon header">
                <i className="circular syringe icon"></i>
                    Vaccine Experience
            </h2>
            <div className="ui divider"></div>
        </div>
    )
}

export default Header;