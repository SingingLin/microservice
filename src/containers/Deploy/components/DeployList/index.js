import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DeployListComponent = ({ onClicktest, data }) => {
    return (
        <div className={'basic-box-item deploy-group__list'}>
            <h3 onClick={() => { onClicktest(); }}>部署清單</h3>
            <div className={'basic-box-panel deploy-group__list__form'}>
                {renderTable(onClicktest, data)}
            </div>
        </div>
    )
};
var collapseOpen = false;

// function collapse() {
//     collapseOpen = !collapseOpen;
//     console.error('collapse', collapseOpen)
//     // return (<FontAwesomeIcon icon={faChevronDown} size="2x" color="#61c0bf" />)
// }

// function returntest() {
//     if (collapseOpen) {
//         return (<FontAwesomeIcon icon={faChevronUp} size="2x" color="#61c0bf" />)
//     } else {
//         return <FontAwesomeIcon icon={faChevronDown} size="2x" color="#61c0bf" />
//     }
// }

function renderTable(onClicktest, data) {
    console.log('data: ', data, collapseOpen)
    if (data != undefined) {
        return (
            <>
                <ul className={'tab-group'}>
                    <li className={'tab active'}><a>New</a></li>
                    <li className={'tab'}><a>Update</a></li>
                </ul>

                <div className={'tab-content'}>
                    <div className={'new'}>
                        <div className={'d-table'}>

                            <div className={'d-table-row'}>
                                <div className={'d-table-cell'}>
                                    <div className={'basic-checkbox'}>
                                        <div>
                                            <input type="checkbox" />
                                            <div className={"checkmark"}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'d-table-cell w-100'}>Name</div>
                                <div className={'d-table-cell'}></div>
                            </div>
                            {data.map((item, i) => {
                                return (
                                    <div className={'d-table-row'}>
                                        <div className={'d-table-cell'}>
                                            <div className={'basic-checkbox'}>
                                                <div>
                                                    <input type="checkbox" />
                                                    <div className={"checkmark"}></div>
                                                </div>
                                                {/* <label htmlFor="checkboxid">checkboxtest</label> */}
                                            </div>
                                        </div>
                                        <div className={'d-table-cell'}>{item.serviceName}</div>
                                        <div className={'d-table-cell'}>
                                            <div className={'basic-icon'}>
                                                <FontAwesomeIcon icon={faChevronDown} size="2x" color="#61c0bf" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* <div className={'d-table-row deploy-group__list__info'}>
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
                                </div> */}

                        </div>
                    </div>
                    {/* <div className={'update'}>
                    </div> */}
                </div>
            </>
        );
    }
}

DeployListComponent.prototype = {
    onClicktest: PropTypes.func.isRequired
}

export default DeployListComponent;