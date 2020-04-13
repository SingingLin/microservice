import React from 'react';

const DeployStrategyComponent = () => {
    return (
        <div className={'basic-box-item deploy-group__strategy'}>
            <h3>部署策略</h3>
            {renderTable()}
        </div>
    )
};

function renderTable() {
    return (
        <div className={'basic-box-panel deploy-group__list__form'}>

            <ul class='tab-group'>
                <li class='tab active'><a>New</a></li>
                <li class='tab'><a>Update</a></li>
            </ul>
        </div>
    )
}

export default DeployStrategyComponent;