import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DeployListComponent = ({ onCollapseFlagClick, onCheckFlagClick, onAllCheckClick, onInstanceCountChange, data, tab }) => {
    function handleChange(count, serviceId) {
        console.log('handleChange: ', count, serviceId);
        onInstanceCountChange(count, serviceId)
    }
    return (
        <>
            {renderTable(onCollapseFlagClick, onCheckFlagClick, onAllCheckClick, handleChange, data, tab)}
        </>
    )
};


function renderTable(onCollapseFlagClick, onCheckFlagClick, onAllCheckClick, handleChange, data, tab) {
    console.log('data: ', data)
    if (data !== undefined && data.length !== 0) {
        return (
            <>
                <div className={'tab-content'}>
                    <div className={'new'} style={tab === 'n' ? { display: 'block' } : { display: 'none' }}>
                        <div className={'d-table'}>

                            <div className={'d-table-row'}>
                                <div className={'d-table-cell'}>
                                    <div className={'basic-checkbox'}>
                                        <div>
                                            <input type="checkbox" onChange={() => {
                                                console.log('allcheck')
                                                onAllCheckClick(!data.allCheckFlag)
                                            }} checked={data.allCheckFlag} />
                                            <div className={"checkmark"}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'d-table-cell w-100'}>Name</div>
                                <div className={'d-table-cell'}></div>
                            </div>
                            {data.data.map((item) => {
                                return (
                                    <>
                                        <div className={'d-table-row'}>
                                            <div className={'d-table-cell'}>
                                                <div className={'basic-checkbox'}>
                                                    <div>
                                                        <input type="checkbox" value={item.checkFlag} onChange={() => { onCheckFlagClick(item.serviceId) }} checked={item.checkFlag} />
                                                        <div className={"checkmark"}></div>
                                                    </div>
                                                    {/* <label htmlFor="checkboxid">checkboxtest</label> */}
                                                </div>
                                            </div>
                                            <div className={'d-table-cell'}>{item.deployment.fileName}</div>
                                            <div className={'d-table-cell'}>
                                                <div className={'basic-icon'} onClick={() => { onCollapseFlagClick(item.serviceId) }}>
                                                    <FontAwesomeIcon icon={(item.openFlag ? faChevronUp : faChevronDown)} size="2x" color="#61c0bf" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'d-table-row deploy-group__list__info'}>
                                            <div className={'d-table-cell'}></div>
                                            <div className={'d-table-cell'}>
                                                <div className={'table-collapse' + (item.openFlag ? ' active' : '')}>
                                                    <ul>
                                                        <li>
                                                            <h4>Name</h4>
                                                            <p className={'font-xs'}>{item.deployment.fileName}</p>
                                                        </li>
                                                        <li>
                                                            <h4>Instance 數量</h4>
                                                            <input placeholder='Instance count' value={item.deployment.instancesCount === null ? "" : item.deployment.instancesCount} onChange={event => handleChange(event.target.value, item.serviceId)} />
                                                        </li>
                                                        <li>
                                                            <h4>部署政策</h4>
                                                            <p className={'font-xs'}>初次部署</p>
                                                        </li>
                                                        <li>
                                                            <h4>Version</h4>
                                                            <p className={'font-xs'}>{item.deployment.fileVersion}</p>
                                                        </li>
                                                        <li>
                                                            <h4>Uploadtime</h4>
                                                            <p className={'font-xs'}>{timeStamp2String(item.deployment.uploadedTime)}</p>
                                                        </li>
                                                        <li>
                                                            <h4>ServiceName</h4>
                                                            <p className={'font-xs'}>{item.serviceName}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={'d-table-cell'}></div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                    <div className={'update'} style={tab === 'u' ? { display: 'block' } : { display: 'none' }}>
                        <div className={'d-table'}>

                            <div className={'d-table-row'}>
                                <div className={'d-table-cell'}>
                                    <div className={'basic-checkbox'}>
                                        <div>
                                            <input type="checkbox" onChange={() => {
                                                console.log('allcheck')
                                                onAllCheckClick(!data.allCheckFlag)
                                            }} checked={data.allCheckFlag} />
                                            <div className={"checkmark"}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'d-table-cell w-100'}>Name</div>
                                <div className={'d-table-cell'}></div>
                            </div>
                            {data.data.map((item) => {
                                return (
                                    <>
                                        <div className={'d-table-row'}>
                                            <div className={'d-table-cell'}>
                                                <div className={'basic-checkbox'}>
                                                    <div>
                                                        <input type="checkbox" value={item.checkFlag} onChange={() => { onCheckFlagClick(item.serviceId) }} checked={item.checkFlag} />
                                                        <div className={"checkmark"}></div>
                                                    </div>
                                                    {/* <label htmlFor="checkboxid">checkboxtest</label> */}
                                                </div>
                                            </div>
                                            <div className={'d-table-cell'}>{item.deployment.fileName}</div>
                                            <div className={'d-table-cell'}>
                                                <div className={'basic-icon'} onClick={() => { onCollapseFlagClick(item.serviceId) }}>
                                                    <FontAwesomeIcon icon={(item.openFlag ? faChevronUp : faChevronDown)} size="2x" color="#61c0bf" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'d-table-row deploy-group__list__info'}>
                                            <div className={'d-table-cell'}></div>
                                            <div className={'d-table-cell'}>
                                                <div className={'table-collapse' + (item.openFlag ? ' active' : '')}>
                                                    <ul>
                                                        <li>
                                                            <h4>Name</h4>
                                                            <p className={'font-xs'}>{item.deployment.fileName}</p>
                                                        </li>
                                                        <li>
                                                            <h4>Instance 數量</h4>
                                                            <input placeholder='Instance count' value={item.deployment.instancesCount === null ? "" : item.deployment.instancesCount} onChange={event => handleChange(event.target.value, item.serviceId)} />
                                                        </li>
                                                        <li>
                                                            <h4>部署政策</h4>
                                                            <div>
                                                                <div className={'basic-radio'}>
                                                                    <div>
                                                                        <input name="strategy" type="radio" id="bg" defaultChecked />
                                                                        <div className={"checkmark"}></div>
                                                                    </div>
                                                                    <label htmlFor="bg">藍綠部署</label>
                                                                </div>
                                                                <div className={'basic-radio'}>
                                                                    <div>
                                                                        <input name="strategy" type="radio" id="c" />
                                                                        <div className={"checkmark"}></div>
                                                                    </div>
                                                                    <label htmlFor="c">金絲雀部署</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <h4>Version</h4>
                                                            <p className={'font-xs'}>{item.deployment.fileVersion}</p>
                                                        </li>
                                                        <li>
                                                            <h4>Uploadtime</h4>
                                                            <p className={'font-xs'}>{timeStamp2String(item.deployment.uploadedTime)}</p>
                                                        </li>
                                                        <li>
                                                            <h4>ServiceName</h4>
                                                            <p className={'font-xs'}>{item.serviceName}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={'d-table-cell'}></div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function timeStamp2String(time) {
    var datetime = new Date(time * 1000);

    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();

    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
};

DeployListComponent.prototype = {
    onCollapseFlagClick: PropTypes.func.isRequired,
    onCheckFlagClick: PropTypes.func.isRequired
}

export default DeployListComponent;