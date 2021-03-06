import { apiUploadFileService, apiGetServices, apiDeployService } from "middleware/api";

/*
 * action type
 */
export const ADD_FILES = 'ADD_FILES';
export const UPDATE_PROGRESS_BAR_VALUE = 'UPDATE_PROGRESS_BAR_VALUE';
export const UPDATE_FILE_STATUS = 'UPDATE_FILE_STATUS';

export const FILTER_MS_NAME = 'FILTER_MS_NAME';
export const FILTER_MS_STATUS = 'FILTER_MS_STATUS';
export const FILTER_MS_CONNECT_VALUE = 'FILTER_MS_CONNECT_VALUE';
export const FILTER_MS_CONNECT_OPTION = 'FILTER_MS_CONNECT_OPTION';

export const UPDATE_SOCKET_OF_MSDATA = 'UPDATE_SOCKET_OF_MSDATA';

export const MODIFY_DEPLOY_DATA = 'MODIFY_DEPLOY_DATA';
export const DEPLOY_TAB = 'DEPLOY_TAB';
export const UPDATE_DEPLOY_COLLAPSE_FLAG = 'UPDATE_DEPLOY_COLLAPSE_FLAG';
export const UPDATE_DEPLOY_CHECK_FLAG = 'UPDATE_DEPLOY_CHECK_FLAG';
export const UPDATE_DEPLOY_ALL_CHECK_FLAG = 'UPDATE_DEPLOY_ALL_CHECK_FLAG';
export const UPDATE_DEPLOY_INSTANCES = 'UPDATE_DEPLOY_INSTANCES';
export const FETCH_DEPLOY_API = 'FETCH_DEPLOY_API';

/*
 * 其他常數
 */
export const MsStatusFilters = {
    ALL: 'ALL',
    UP: 'UP',
    OUT_OF_SERVICE: 'OUT_OF_SERVICE'
}
export const MsConnectFilters = {
    gt: 'gt',
    gte: 'gte',
    equal: 'equal',
    lte: 'lte',
    lt: 'lt'
}


/*
 * action creator
 */

/**
 * upload 
 */
// send upload file api
function getApiUploadFileService(form, file) {
    return (dispatch) => {
        const myUploadProgress = () =>
            (progressEvent) => {
                const totalLength = progressEvent.lengthComputable ?
                    progressEvent.total :
                    progressEvent.target.getResponseHeader('content-length')
                    || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                if (totalLength !== null) {
                    var percentCompleted = Math.round((progressEvent.loaded * 100) / totalLength);

                    dispatch(updateProgressBarValue(file.index, percentCompleted))

                }
            }

        // let cancel = [];
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            // cancelToken: new CancelToken((c) => {
            //     cancel.push(c);
            // }),
            onUploadProgress: myUploadProgress()
        };

        return apiUploadFileService(form, config)
            .then(res => {
                console.log('upload file success: ', res)
                dispatch(updateFileStatus(file.index, res.data))
            })
            .catch(error => {
                console.log('upload file error: ', error)
                throw (error)
            })
    }
}

function addFiles(files) {
    return { type: ADD_FILES, files }
}

export function fetchFiles(files) {
    return (dispatch, getState) => {
        dispatch(addFiles(files))

        for (var index = 0; index < files.length; index++) {
            let form = new FormData();
            form.append("file", files[index].file);
            dispatch(getApiUploadFileService(form, files[index]))
        }
    }
}


export function updateProgressBarValue(index, percentCompleted) {
    return {
        type: UPDATE_PROGRESS_BAR_VALUE,
        index,
        percentCompleted
    }
}

export function updateFileStatus(index, status) {
    return {
        type: UPDATE_FILE_STATUS,
        index,
        status
    }
}

/**
 * deploy 
 */
// get service api
export function getApiGetServices() {
    return (dispatch) => {

        return apiGetServices()
            .then(res => {
                console.log('apiGetServices success: ', res)
                dispatch(modifyDeployData(res.data.data))
            })
            .catch(error => {
                console.log('apiGetServices error: ', error)
                throw (error)
            })
    }
}
function modifyDeployData(data) {
    return {
        type: MODIFY_DEPLOY_DATA,
        data
    }
}
export function deployTab(status) {
    return {
        type: DEPLOY_TAB,
        status
    }
}
export function updateDeployCollapseFlag(id) {
    return {
        type: UPDATE_DEPLOY_COLLAPSE_FLAG,
        id
    }
}
export function updateDeployCheckFlag(id) {
    return {
        type: UPDATE_DEPLOY_CHECK_FLAG,
        id
    }
}
export function updateDeployAllCheckFlag(flag) {
    return {
        type: UPDATE_DEPLOY_ALL_CHECK_FLAG,
        flag
    }
}
export function updateDeployInstances(instancesCount, serviceId) {
    return {
        type: UPDATE_DEPLOY_INSTANCES,
        instancesCount,
        serviceId
    }
}

export function fetchDeployApi(reqData) {
    console.log('reqData: ', reqData)
    return (dispatch) => {
        dispatch(postDeploy(reqData));
    }
}

function postDeploy(reqData) {
    return (dispatch) => {

        return apiDeployService(reqData)
            .then(res => {
                console.log('apiDeployService success: ', res)
                // dispatch(modifyDeployData(res.data.data))
            })
            .catch(error => {
                console.log('apiDeployService error: ', error)
                throw (error)
            })
    }
}

/**
 * mointoring 
 */
export function filterMsName(name) {
    return {
        type: FILTER_MS_NAME,
        name
    }
}

export function filterMsStatus(status) {
    return {
        type: FILTER_MS_STATUS,
        status
    }
}

export function filterMsConnentValue(value) {
    return {
        type: FILTER_MS_CONNECT_VALUE,
        value
    }
}


export function filterMsConnentOption(option) {
    return {
        type: FILTER_MS_CONNECT_OPTION,
        option
    }
}

export function updateSocketOfMsdata(data) {
    return {
        type: UPDATE_SOCKET_OF_MSDATA,
        data
    }
}