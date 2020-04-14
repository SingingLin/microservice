import React from 'react';

const DeployStrategyComponent = () => {
    return (
        <div className={'drawer-bottom'}>
            {renderTable()}
        </div>
    )
};

function renderTable() {
    return (
        <div className={'basic-btn'}>
            <p className={'font-s'}>部署1隻</p>
        </div>
    )
}

export default DeployStrategyComponent;