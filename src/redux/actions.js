// import { apiUploadFileService } from "../routes/api";
import { apiUploadFileService } from "middleware/api";
import axios from 'axios';

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