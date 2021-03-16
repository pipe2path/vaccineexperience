import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <img src="vaccine-6.jpg" className="ui small centered image" />
            <h2 className="ui center aligned icon header">
                {/* <i className="circular syringe icon"></i> */}
                Relate Your Experience
            </h2>
            <div className="ui divider"></div>
        </div>
    )
}

export default Header;