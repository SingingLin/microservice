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
                console.log("UPDATE_PROGRESS_BAR_VALUE: ", file, index)
                if (file.index === action.index) {
                    return Object.assign({}, file, {
                        progressData: action.percentCompleted
                    })
                }
                return file
            })

        case UPDATE_FILE_STATUS:
            console.error('action: ', action)
            console.error('state: ', state)
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
    msData,
    filterOfMs
})

export default rootReducers;