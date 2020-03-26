import React from 'react';
import './_left.scss';

function Left() {
    return (
        <div className="left__drawer">
            <ul className="left__drawer__group">
                <li className="left__drawer__group__item left__drawer__group__item--active"><span className="icon icon--monitoring"></span>Monitoring</li>
                <li className="left__drawer__group__item"><span className="icon icon--deploy"></span>Deploy</li>
                <li className="left__drawer__group__item"><span className="icon icon--upload"></span>Upload</li>
            </ul>
        </div>
    );
}

export default Left;