import React from 'react';

const DeployStrategyComponent = ({ count }) => {
    return (
        <div className={'drawer-bottom' + (count != 0 ? ' active' : '')}>
            <div className={'basic-btn'}>
                <p className={'font-s'}>部署{count}隻</p>
            </div>
        </div>
    )
};

export default DeployStrategyComponent;