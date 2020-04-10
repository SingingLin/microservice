import React, { Fragment } from 'react';
import uploadIcon from "assets/images/uploadIcon.png";
import { Line } from 'rc-progress';

const FileCardComponent = ({ files }) => (
    <div>
        {/* <h3>Uploading</h3> */}
        {renderFiles(files)}
    </div>
);


function renderFiles(files) {
    if (files.length > 0) {
        return (
            <ul>
                {files.map((item, i) => (
                    <Fragment>
                        <li key={item.index} className={'upload-group__filelist__item ' + getErrorBg(item)}>
                            <div className={'upload-group__filelist__item__img'}><img src={`${uploadIcon}`} alt="uploadIcon" /></div>
                            <div className={'upload-group__filelist__item__info'}>
                                <h3 className={'upload-group__filelist__item__info__file-name'}>{item.file.name}

                                </h3>
                                <span>{item.file.size} bytes</span>
                                <div className={'upload-group__filelist__item__info__message'}>
                                    <p className={'font-s'}>{getUploadMsg(item.progressData, item)}</p>
                                    {/* <EuiButtonIcon
                                        color={item.progressData == 100 ? 'success' : 'danger'}
                                        // onClick={() => this.cancelBtn()}
                                        iconType={getIconType(item.progressData, item)}
                                        aria-label="Next"
                                        disabled={item.progressData == 100 ? true : false}
                                    /> */}
                                </div>
                                <Line percent={item.progressData} trailWidth="2" strokeWidth="2" strokeColor="#4bbcf4" prefixCls="upload-group__filelist__item__info" />
                                {/* <EuiProgress value={item.progressData} max={100} color="primary" size="s" /> */}
                            </div>
                        </li>
                        <div className={'separation-line'}></div>
                    </Fragment>
                ))}
            </ul>
        );
    }
}



function getUploadMsg(progress, file) {
    if (progress < 100) {
        return 'Uploading...';
    } else {
        let msg;
        if (file.hasOwnProperty('status')) {
            if (file.status.hasOwnProperty('errorMsg')) {
                msg = file.status.errorMsg
            } else {
                msg = 'Completed';
            }
        }
        return msg;
    }
}


function getErrorBg(file) {
    let className;

    if (file.hasOwnProperty('status')) {
        if (file.status.hasOwnProperty('errorMsg')) {
            className = 'upload-group__filelist__item--failed';
        } else {
            className = '';
        }
    }

    return className;
};

// function getIconType(progress, file) {
//     let iconType;
//     if (progress < 100) {
//         iconType = 'cross';
//     } else {
//         if (file.hasOwnProperty('status')) {
//             if (file.status.hasOwnProperty('errorMsg')) {
//                 iconType = 'alert';
//             } else {
//                 iconType = 'check';
//             }
//         }
//     }

//     return iconType;
// }

export default FileCardComponent;