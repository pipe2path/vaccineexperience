import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <img src="vaccine-4.jpg" width="100%"/>
            {/* <h2 className="ui center aligned icon header">
                <i className="circular syringe icon"></i>
                    Vaccine Experience
            </h2> */}
            <div className="ui center aligned text header">Vaccine Experience</div>
            <div className="ui divider"></div>
        </div>
    )
}

export default Header;