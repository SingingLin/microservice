import React from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import './_left.scss';

function Left() {
    return (
        <Router>
            <div className="left__drawer">
                <ul className="left__drawer__group">
                    <NavLink exact activeClassName="left__drawer__group__item--active" to="/">
                        <li className="left__drawer__group__item left__drawer__group__item--active">
                            Home
                        </li>
                    </NavLink>
                    <li className="left__drawer__group__item">
                        <NavLink exact activeClassName="left__drawer__group__item--active" to="/monitoring">
                            <span className="icon icon--monitoring"></span>
                            Monitoring
                        </NavLink>
                    </li>
                    <li className="left__drawer__group__item">
                        <span className="icon icon--deploy"></span>
                        <NavLink exact activeClassName="left__drawer__group__item--active" to="/deploy">
                            Deploy
                        </NavLink>
                    </li>
                    <li className="left__drawer__group__item">
                        <span className="icon icon--upload"></span>
                        <NavLink exact activeClassName="left__drawer__group__item--active" to="/upload">
                            Upload
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Router>
    );
}

export default Left;