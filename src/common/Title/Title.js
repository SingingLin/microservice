import React from 'react';
import "./_title.scss";

const TitleComponent = ({ titleName }) => (
    <div className={'title-name'}>
        <h2>{titleName}</h2>
    </div>
);

export default TitleComponent;