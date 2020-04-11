import React from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import './_left.scss';

function Left() {
    return (
        <Router>
            <div className="left__drawer">
                <ul className="left__drawer__group">
                    <li className="left__drawer__group__item">
                        <NavLink exact activeClassName="left__drawer__group__item--active" to="/monitoring">
                            <span className="icon icon--monitoring"></span>
                            <p className={'font-s'}>Monitoring</p>
                        </NavLink>
                    </li>
                    <li className="left__drawer__group__item">
                        <NavLink exact activeClassName="left__drawer__group__item--active" to="/deploy">
                            <span className="icon icon--deploy"></span>
                            <p className={'font-s'}>Deploy</p>
                        </NavLink>
                    </li>
                    <li className="left__drawer__group__item">
                        <NavLink exact activeClassName="left__drawer__group__item--active" to="/upload">
                            <span className="icon icon--upload"></span>
                            <p className={'font-s'}>Upload</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Router>
    );
}

export default Left;