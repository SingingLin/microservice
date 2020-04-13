import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DeployListComponent = () => {
    return (
        <div className={'basic-box-item deploy-group__list'}>
            <h3>部署清單</h3>
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

            <div class='tab-content'>
                <div className={'new'}>
                    <div className={'d-table'}>

                        <div className={'d-table-row'}>
                            <div className={'d-table-cell'}>
                                <div className={'basic-checkbox'}>
                                    <input type="checkbox" />
                                    <div></div>
                                </div>
                            </div>
                            <div className={'d-table-cell w-100'}>Name</div>
                            <div className={'d-table-cell'}></div>
                        </div>

                        <div className={'d-table-row'}>
                            <div className={'d-table-cell'}>
                                <div className={'basic-checkbox'}>
                                    <input type="checkbox" />
                                    <div></div>
                                </div>
                            </div>
                            <div className={'d-table-cell'}>eureka-manager-0.0.1-SNAPSHOT.jar</div>
                            <div className={'d-table-cell'}>
                                <div className={'basic-icon'}>
                                    <FontAwesomeIcon icon={faChevronUp} size="2x" color="#61c0bf" />
                                </div>
                            </div>
                        </div>

                        <div className={'d-table-row deploy-group__list__info'}>
                            <div className={'d-table-cell'}></div>
                            <div className={'d-table-cell'}>
                                <div className={'table-collapse'}>
                                    <ul>
                                        <li>
                                            <h4>Name</h4>
                                            <p className={'font-xs'}>eureka-manager-0.0.1-SNAPSHOT.jar</p>
                                        </li>
                                        <li>
                                            <h4>Instance 數量</h4>
                                            <input placeholder='Instance count' />
                                        </li>
                                        <li>
                                            <h4>Version</h4>
                                            <p className={'font-xs'}>0.0.1-SNAPSHOT</p>
                                        </li>
                                        <li>
                                            <h4>Uploadtime</h4>
                                            <p className={'font-xs'}>1582786395</p>
                                        </li>
                                        <li>
                                            <h4>ServiceName</h4>
                                            <p className={'font-xs'}>eureka-manager</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'d-table-cell'}></div>
                        </div>

                    </div>
                </div>
                <div className={'update'}>
                </div>
            </div>
        </div>
    )
}

export default DeployListComponent;