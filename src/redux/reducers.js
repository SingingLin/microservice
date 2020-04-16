import { combineReducers } from 'redux';
import {
    ADD_FILES,
    UPDATE_PROGRESS_BAR_VALUE,
    UPDATE_FILE_STATUS,
    FILTER_MS_NAME,
    FILTER_MS_STATUS,
    FILTER_MS_CONNECT_VALUE,
    FILTER_MS_CONNECT_OPTION,
    UPDATE_SOCKET_OF_MSDATA,
    MODIFY_DEPLOY_DATA,
    DEPLOY_TAB,
    UPDATE_DEPLOY_COLLAPSE_FLAG,
    UPDATE_DEPLOY_CHECK_FLAG,
    UPDATE_DEPLOY_ALL_CHECK_FLAG,
    MsStatusFilters,
    MsConnectFilters
} from "./actions";
const { ALL } = MsStatusFilters;
const { gt } = MsConnectFilters;

function filterOfMs(state = { name: '', status: ALL, connectValue: '', connectOption: gt }, action) {
    switch (action.type) {
        case FILTER_MS_NAME:

            return {
                ...state,
                name: action.name,
            };

        case FILTER_MS_STATUS:

            return {
                ...state,
                status: action.status,
            };

        case FILTER_MS_CONNECT_VALUE:

            const sanitizedValue = parseInt(action.value, 10);

            return {
                ...state,
                connectValue: isNaN(sanitizedValue) ? '' : sanitizedValue < 0 ? '' : sanitizedValue,
            };

        case FILTER_MS_CONNECT_OPTION:

            return {
                ...state,
                connectOption: action.option,
            };

        default:
            return state;
    }
}

function files(state = [], action) {
    switch (action.type) {
        case ADD_FILES:
            return [
                ...action.files,
                ...state
            ]

        case UPDATE_PROGRESS_BAR_VALUE:
            return state.map((file, index) => {
                if (file.index === action.index) {
                    return Object.assign({}, file, {
                        progressData: action.percentCompleted
                    })
                }
                return file
            })

        case UPDATE_FILE_STATUS:
            return state.map((file, index) => {
                if (file.index === action.index) {
                    // if (action.status.success.length === 1) {
                    return Object.assign({}, file, {
                        status: action.status
                        // status: action.status.success[0]
                    })
                    // } else {
                    // return Object.assign({}, file, {
                    // status: action.status.fail[0]
                    // })
                    // }
                }
                return file
            })

        default:
            return state;
    }
}

function deploy(state = { allList: {}, tab: 'n' }, action) {
    switch (action.type) {
        case MODIFY_DEPLOY_DATA:
            let newObj = {
                data: [],
                allCheckFlag: false
            };
            let updateObj = {
                data: [],
                allCheckFlag: false
            };
            action.data.forEach(_item => {
                if (_item.deployment.length === 1
                    && (_item.deployment[0].strategy === ''
                        || _item.deployment[0].strategy === null
                        || _item.deployment[0].strategy === ' ')) {
                    newObj.data.push({
                        serviceName: _item.serviceName,
                        serviceId: _item.serviceId,
                        deployment: _item.deployment[0],
                        openFlag: false,
                        checkFlag: false
                    })
                } else if (_item.deployment.length > 1
                    && (_item.deployment[_item.deployment.length - 1].strategy === ''
                        || _item.deployment[_item.deployment.length - 1].strategy === null
                        || _item.deployment[_item.deployment.length - 1].strategy === ' ')) {
                    updateObj.data.push({
                        serviceName: _item.serviceName,
                        serviceId: _item.serviceId,
                        deployment: _item.deployment[_item.deployment.length - 1],
                        openFlag: false,
                        checkFlag: false
                    })
                }
            })
            return {
                ...state,
                allList: { newObj, updateObj }
            };

        case DEPLOY_TAB:
            return {
                ...state,
                tab: action.status
            };

        case UPDATE_DEPLOY_COLLAPSE_FLAG:
            return {
                ...state,
                allList: {
                    newObj: {
                        data: state.allList.newObj.data.map((_item) => {
                            if (_item.serviceId === action.id) {
                                return Object.assign({}, _item, {
                                    openFlag: !_item.openFlag
                                })
                            }
                            return _item;
                        }),
                        allCheckFlag: state.allList.newObj.allCheckFlag
                    },
                    updateObj: {
                        data: state.allList.updateObj.data.map((_item) => {
                            if (_item.serviceId === action.id) {
                                return Object.assign({}, _item, {
                                    openFlag: !_item.openFlag
                                })
                            }
                            return _item;
                        }),
                        allCheckFlag: state.allList.updateObj.allCheckFlag
                    }
                }
            }

        case UPDATE_DEPLOY_CHECK_FLAG:
            return {
                ...state,
                allList: {
                    newObj: {
                        data: state.allList.newObj.data.map((_item) => {
                            if (_item.serviceId === action.id) {
                                return Object.assign({}, _item, {
                                    checkFlag: !_item.checkFlag
                                })
                            } else if (action.id === 'all') {
                                return Object.assign({}, _item, {
                                    checkFlag: !_item.checkFlag
                                })
                            }
                            return _item;
                        }),
                        allCheckFlag: state.allList.newObj.allCheckFlag
                    },
                    updateObj: {
                        data: state.allList.updateObj.data.map((_item) => {
                            if (_item.serviceId === action.id) {
                                return Object.assign({}, _item, {
                                    checkFlag: !_item.checkFlag
                                })
                            }
                            return _item;
                        }),
                        allCheckFlag: state.allList.updateObj.allCheckFlag
                    }
                },
            }

        case UPDATE_DEPLOY_ALL_CHECK_FLAG:
            return {
                ...state,
                allList: {
                    newObj: {
                        data: state.allList.newObj.data.map(_item => {
                            if (state.tab === 'n') {
                                return Object.assign({}, _item, {
                                    checkFlag: action.flag
                                })
                            }
                            return _item;
                        }),
                        allCheckFlag: state.tab === 'n' && action.flag
                    },
                    updateObj: {
                        data: state.allList.updateObj.data.map(_item => {
                            if (state.tab === 'u') {
                                return Object.assign({}, _item, {
                                    checkFlag: action.flag
                                })
                            }
                            return _item;

                        }),
                        allCheckFlag: state.tab === 'u' && action.flag
                    }
                }
            }

        // return {
        // ...state,
        // allList:
        // return
        // {
        // ...state,
        // allList: {
        //     newObj: {
        //         allCheckFlag: action.flag
        //     }
        // }
        // return Object.assign({}, state.allList.newObj.allCheckFlag, {
        //     // state.allList.newObj.allCheckFlag: action.flag
        // })
        // }


        // }
        //             return state.map((todo, index) => {
        //                 if (index == action.index) {
        //                     return Object.assign({}, todo, {
        //                         completed: !todo.completed
        //                     })
        //                 }
        //                 return todo
        //             })
        // }


        default:
            return state;
    }
}

function msData(state = [], action) {
    switch (action.type) {
        case UPDATE_SOCKET_OF_MSDATA:
            return action.data.map(_item => {

                // 判斷要不要顯示微服務
                if (_item.deployment.length === 0) {
                    _item['showFlag'] = false;
                } else {
                    let count = 0;
                    _item.deployment.map(_deploy => {
                        if (_deploy.deployedStatus !== 'SUCCESS') {
                            count++;
                        }
                        return null;
                    })
                    if (count === _item.deployment.length) {
                        _item['showFlag'] = false;
                    } else {
                        _item['showFlag'] = true;
                    }
                }

                // 判斷微服務狀態
                _item['status'] = 'OUT_OF_SERVICE';
                if (_item.instances.length === 0) {
                    _item['status'] = 'OUT_OF_SERVICE';
                }
                _item.instances.map((_itemStatus) => {
                    if (_itemStatus.status !== 'OUT_OF_SERVICE') {
                        _item['status'] = 'UP';
                    }
                    return null;
                })
                return _item;
            })

        default:
            return state;
    }
}

// function visibilityFilter(state = SHOW_ALL, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter
//         default:
//             return state
//     }
// }

// function todos(state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if (index == action.index) {
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     })
//                 }
//                 return todo
//             })
//         default:
//             return state
//     }
// }

const rootReducers = combineReducers({
    // visibilityFilter,
    // todos
    files,
    deploy,
    msData,
    filterOfMs
})

export default rootReducers;