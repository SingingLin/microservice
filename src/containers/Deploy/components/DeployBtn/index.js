import React from 'react';

const DeployBtnComponent = ({ onBtnClick, count }) => {
    return (
        <div className={'drawer-bottom' + (count !== 0 ? ' active' : '')}>
            <div className={'basic-btn'} onClick={onBtnClick}>
                <p className={'font-s'}>部署{count}隻</p>
                {/* <a href="/upload">upload</a> */}
            </div>
        </div>
    )
};

export default DeployBtnComponent;