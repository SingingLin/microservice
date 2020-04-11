import React from 'react';
import user from 'assets/images/robot.svg';
import './_header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__projname">
                <h1>Microservice Dashboard</h1>
            </div>
            <div className="header__user">
                <img src={user} alt="user-logo" />
            </div>
        </header>
    );
}

export default Header;
